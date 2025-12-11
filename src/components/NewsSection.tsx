import { useState, useEffect } from "react";
import { Calendar, FileText, Bell, Megaphone, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "file-text": FileText,
  "calendar": Calendar,
  "bell": Bell,
  "megaphone": Megaphone,
  "star": Star,
};

interface NewsUpdate {
  id: string;
  title: string;
  content: string;
  date: string | null;
  icon_type: string;
}

const NewsSection = () => {
  const [updates, setUpdates] = useState<NewsUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from("news_updates")
        .select("id, title, content, date, icon_type")
        .eq("is_published", true)
        .order("display_order");

      if (error) {
        console.error("Error fetching news:", error);
      } else if (data) {
        setUpdates(data);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <section id="news" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              News & Updates
            </h2>
            <div className="w-24 h-1 bg-campaign-red mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-background rounded-xl p-6 md:p-8 shadow-sm border border-border animate-pulse">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full" />
                  <div className="flex-1 space-y-3">
                    <div className="h-6 bg-muted rounded w-1/3" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-2/3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            News & Updates
          </h2>
          <div className="w-24 h-1 bg-campaign-red mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {updates.map((update) => {
            const IconComponent = iconMap[update.icon_type] || FileText;
            return (
              <div
                key={update.id}
                className="bg-background rounded-xl p-6 md:p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-campaign-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-campaign-red" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {update.title}
                      </h3>
                      {update.date && (
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                          {update.date}
                        </span>
                      )}
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {update.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {updates.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No news updates at this time. Check back soon!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
