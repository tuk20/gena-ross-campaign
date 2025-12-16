import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface VolunteerFormData {
  name: string;
  email: string;
  phone?: string;
  interests: string[];
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, interests, message }: VolunteerFormData = await req.json();

    console.log("Received volunteer form submission:", { name, email, phone, interests, message });

    const interestLabels: Record<string, string> = {
      "canvassing": "Door-to-door canvassing",
      "phone-banking": "Phone banking",
      "events": "Event support",
      "social-media": "Social media assistance",
      "other": "Other",
    };

    const interestsList = interests.map(i => interestLabels[i] || i).join(", ") || "None specified";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Dr. Gena L. Ross Campaign <onboarding@resend.dev>",
        to: ["ross4plattecounty@gmail.com"],
        subject: `New Volunteer Sign-up: ${name}`,
        html: `
          <h1>New Volunteer Sign-up</h1>
          <p>A new volunteer has signed up through the campaign website:</p>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Areas of Interest</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${interestsList}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${message || "No message provided"}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #666;">This email was sent from the campaign website volunteer form.</p>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Resend API error:", errorData);
      throw new Error(errorData.message || "Failed to send email");
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-volunteer-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
