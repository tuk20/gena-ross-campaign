import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Trash2, Plus, LogOut, Save } from 'lucide-react';

interface NewsUpdate {
  id: string;
  title: string;
  content: string;
  date: string | null;
  icon_type: string;
  is_published: boolean;
  display_order: number;
}

interface ElectionDate {
  id: string;
  event_name: string;
  event_date: string;
  description: string | null;
  display_order: number;
}

interface SiteSetting {
  id: string;
  key: string;
  value: string;
  label: string;
  description: string | null;
}

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [newsUpdates, setNewsUpdates] = useState<NewsUpdate[]>([]);
  const [electionDates, setElectionDates] = useState<ElectionDate[]>([]);
  const [siteSettings, setSiteSettings] = useState<SiteSetting[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/admin/login');
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchData();
    }
  }, [user, isAdmin]);

  const fetchData = async () => {
    const [newsRes, datesRes, settingsRes] = await Promise.all([
      supabase.from('news_updates').select('*').order('display_order'),
      supabase.from('election_dates').select('*').order('display_order'),
      supabase.from('site_settings').select('*'),
    ]);

    if (newsRes.data) setNewsUpdates(newsRes.data);
    if (datesRes.data) setElectionDates(datesRes.data);
    if (settingsRes.data) setSiteSettings(settingsRes.data);
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  // News Updates handlers
  const updateNewsItem = (id: string, field: keyof NewsUpdate, value: string | boolean | number) => {
    setNewsUpdates(prev => prev.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const addNewsItem = () => {
    const newItem: NewsUpdate = {
      id: `new-${Date.now()}`,
      title: 'New Update',
      content: '',
      date: null,
      icon_type: 'bell',
      is_published: false,
      display_order: newsUpdates.length + 1,
    };
    setNewsUpdates([...newsUpdates, newItem]);
  };

  const deleteNewsItem = async (id: string) => {
    if (id.startsWith('new-')) {
      setNewsUpdates(prev => prev.filter(item => item.id !== id));
      return;
    }
    
    const { error } = await supabase.from('news_updates').delete().eq('id', id);
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setNewsUpdates(prev => prev.filter(item => item.id !== id));
      toast({ title: 'Deleted', description: 'News item removed.' });
    }
  };

  const saveNewsUpdates = async () => {
    setSaving(true);
    
    for (const item of newsUpdates) {
      const data = {
        title: item.title,
        content: item.content,
        date: item.date,
        icon_type: item.icon_type,
        is_published: item.is_published,
        display_order: item.display_order,
      };

      if (item.id.startsWith('new-')) {
        const { error } = await supabase.from('news_updates').insert(data);
        if (error) {
          toast({ title: 'Error', description: error.message, variant: 'destructive' });
          setSaving(false);
          return;
        }
      } else {
        const { error } = await supabase.from('news_updates').update(data).eq('id', item.id);
        if (error) {
          toast({ title: 'Error', description: error.message, variant: 'destructive' });
          setSaving(false);
          return;
        }
      }
    }

    await fetchData();
    setSaving(false);
    toast({ title: 'Saved', description: 'News updates saved successfully.' });
  };

  // Election Dates handlers
  const updateElectionDate = (id: string, field: keyof ElectionDate, value: string | number) => {
    setElectionDates(prev => prev.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const addElectionDate = () => {
    const newItem: ElectionDate = {
      id: `new-${Date.now()}`,
      event_name: 'New Event',
      event_date: '',
      description: null,
      display_order: electionDates.length + 1,
    };
    setElectionDates([...electionDates, newItem]);
  };

  const deleteElectionDate = async (id: string) => {
    if (id.startsWith('new-')) {
      setElectionDates(prev => prev.filter(item => item.id !== id));
      return;
    }
    
    const { error } = await supabase.from('election_dates').delete().eq('id', id);
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setElectionDates(prev => prev.filter(item => item.id !== id));
      toast({ title: 'Deleted', description: 'Election date removed.' });
    }
  };

  const saveElectionDates = async () => {
    setSaving(true);
    
    for (const item of electionDates) {
      const data = {
        event_name: item.event_name,
        event_date: item.event_date,
        description: item.description,
        display_order: item.display_order,
      };

      if (item.id.startsWith('new-')) {
        const { error } = await supabase.from('election_dates').insert(data);
        if (error) {
          toast({ title: 'Error', description: error.message, variant: 'destructive' });
          setSaving(false);
          return;
        }
      } else {
        const { error } = await supabase.from('election_dates').update(data).eq('id', item.id);
        if (error) {
          toast({ title: 'Error', description: error.message, variant: 'destructive' });
          setSaving(false);
          return;
        }
      }
    }

    await fetchData();
    setSaving(false);
    toast({ title: 'Saved', description: 'Election dates saved successfully.' });
  };

  // Site Settings handlers
  const updateSetting = (key: string, value: string) => {
    setSiteSettings(prev => prev.map(item => 
      item.key === key ? { ...item, value } : item
    ));
  };

  const saveSiteSettings = async () => {
    setSaving(true);
    
    for (const item of siteSettings) {
      const { error } = await supabase
        .from('site_settings')
        .update({ value: item.value })
        .eq('key', item.key);
      
      if (error) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
        setSaving(false);
        return;
      }
    }

    setSaving(false);
    toast({ title: 'Saved', description: 'Site settings saved successfully.' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-background border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="font-heading text-xl font-bold text-foreground">Campaign Admin</h1>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => navigate('/')}>
              View Site
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="news" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="dates">Election Dates</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-heading text-2xl font-semibold">News & Updates</h2>
              <div className="flex gap-2">
                <Button onClick={addNewsItem} variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add News
                </Button>
                <Button onClick={saveNewsUpdates} disabled={saving} size="sm" className="bg-campaign-red hover:bg-campaign-red/90">
                  <Save className="w-4 h-4 mr-2" />
                  Save All
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {newsUpdates.map((item) => (
                <Card key={item.id}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 space-y-2">
                        <Input
                          value={item.title}
                          onChange={(e) => updateNewsItem(item.id, 'title', e.target.value)}
                          className="font-semibold"
                          placeholder="Title"
                        />
                      </div>
                      <div className="flex items-center gap-4 ml-4">
                        <div className="flex items-center gap-2">
                          <Label htmlFor={`published-${item.id}`} className="text-sm">Published</Label>
                          <Switch
                            id={`published-${item.id}`}
                            checked={item.is_published}
                            onCheckedChange={(checked) => updateNewsItem(item.id, 'is_published', checked)}
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteNewsItem(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Date (optional)</Label>
                        <Input
                          value={item.date || ''}
                          onChange={(e) => updateNewsItem(item.id, 'date', e.target.value)}
                          placeholder="e.g., 2026"
                        />
                      </div>
                      <div>
                        <Label>Icon</Label>
                        <select
                          value={item.icon_type}
                          onChange={(e) => updateNewsItem(item.id, 'icon_type', e.target.value)}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background"
                        >
                          <option value="file-text">Document</option>
                          <option value="calendar">Calendar</option>
                          <option value="bell">Bell</option>
                          <option value="megaphone">Megaphone</option>
                          <option value="star">Star</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <Label>Content</Label>
                      <Textarea
                        value={item.content}
                        onChange={(e) => updateNewsItem(item.id, 'content', e.target.value)}
                        placeholder="Write your news content here..."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dates" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-heading text-2xl font-semibold">Election Dates</h2>
              <div className="flex gap-2">
                <Button onClick={addElectionDate} variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Date
                </Button>
                <Button onClick={saveElectionDates} disabled={saving} size="sm" className="bg-campaign-red hover:bg-campaign-red/90">
                  <Save className="w-4 h-4 mr-2" />
                  Save All
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {electionDates.map((item) => (
                <Card key={item.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <div>
                          <Label>Event Name</Label>
                          <Input
                            value={item.event_name}
                            onChange={(e) => updateElectionDate(item.id, 'event_name', e.target.value)}
                            placeholder="Event name"
                          />
                        </div>
                        <div>
                          <Label>Date</Label>
                          <Input
                            value={item.event_date}
                            onChange={(e) => updateElectionDate(item.id, 'event_date', e.target.value)}
                            placeholder="e.g., August 4, 2026"
                          />
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteElectionDate(item.id)}
                        className="text-destructive hover:text-destructive mt-6"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-heading text-2xl font-semibold">Site Settings</h2>
              <Button onClick={saveSiteSettings} disabled={saving} size="sm" className="bg-campaign-red hover:bg-campaign-red/90">
                <Save className="w-4 h-4 mr-2" />
                Save Settings
              </Button>
            </div>

            <div className="space-y-4">
              {siteSettings.map((setting) => (
                <Card key={setting.key}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{setting.label}</CardTitle>
                    {setting.description && (
                      <CardDescription>{setting.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <Input
                      value={setting.value}
                      onChange={(e) => updateSetting(setting.key, e.target.value)}
                      placeholder={`Enter ${setting.label.toLowerCase()}`}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
