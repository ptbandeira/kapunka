'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Save, 
  Upload, 
  Download, 
  Eye, 
  Settings,
  Globe,
  FileText,
  Image,
  Palette
} from 'lucide-react';

interface ContentData {
  home: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      cta: string;
    };
    features: {
      pure: { title: string; description: string };
      method: { title: string; description: string };
      respect: { title: string; description: string };
    };
  };
  products: {
    title: string;
    subtitle: string;
    pure_argan_oil: {
      name: string;
      description: string;
      size: string;
      price: string;
    };
  };
}

export default function AdminPage() {
  const [content, setContent] = useState<ContentData>({
    home: {
      hero: {
        title: "Quiet care for sensitive skin",
        subtitle: "Pure argan oil taught through a simple, disciplined method",
        description: "Kapunka offers quiet strength in a bottle. Pure first-press argan oil, designed to soothe, soften, and support the skin barrier.",
        cta: "Discover the Method"
      },
      features: {
        pure: {
          title: "Pure Origin",
          description: "First-press argan oil from Moroccan women's cooperatives"
        },
        method: {
          title: "Method-Led Care",
          description: "Simple, disciplined application for consistent results"
        },
        respect: {
          title: "Respect for Skin",
          description: "Gentle formulation suitable for sensitive skin"
        }
      }
    },
    products: {
      title: "Our Products",
      subtitle: "Simple by choice. Powerful by nature.",
      pure_argan_oil: {
        name: "Pure Argan Oil",
        description: "100% pure first-press argan oil in a clear glass bottle",
        size: "30ml",
        price: "€45"
      }
    }
  });

  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate saving to backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    alert('Content saved successfully!');
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(content, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'kapunka-content.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const updateContent = (path: string[], value: string) => {
    setContent(prev => {
      const newContent = { ...prev };
      let current: any = newContent;
      
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      
      current[path[path.length - 1]] = value;
      return newContent;
    });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Kapunka Admin Panel</h1>
        <p className="text-muted-foreground">Manage your website content with ease</p>
      </div>

      <div className="flex gap-4 mb-6">
        <Button onClick={handleSave} disabled={isSaving}>
          <Save className="mr-2 h-4 w-4" />
          {isSaving ? 'Saving...' : 'Save Changes'}
        </Button>
        <Button variant="outline" onClick={handleExport}>
          <Download className="mr-2 h-4 w-4" />
          Export Content
        </Button>
        <Button variant="outline">
          <Upload className="mr-2 h-4 w-4" />
          Import Content
        </Button>
        <Button variant="outline">
          <Eye className="mr-2 h-4 w-4" />
          Preview Site
        </Button>
      </div>

      <Tabs defaultValue="content" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="content" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Content
          </TabsTrigger>
          <TabsTrigger value="media" className="flex items-center gap-2">
            <Image className="h-4 w-4" />
            Media
          </TabsTrigger>
          <TabsTrigger value="design" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Design
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <Label htmlFor="language">Language:</Label>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6">
            {/* Homepage Content */}
            <Card>
              <CardHeader>
                <CardTitle>Homepage Content</CardTitle>
                <CardDescription>Manage your homepage hero section and features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="hero-title">Hero Title</Label>
                    <Input
                      id="hero-title"
                      value={content.home.hero.title}
                      onChange={(e) => updateContent(['home', 'hero', 'title'], e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
                    <Input
                      id="hero-subtitle"
                      value={content.home.hero.subtitle}
                      onChange={(e) => updateContent(['home', 'hero', 'subtitle'], e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-description">Hero Description</Label>
                    <Textarea
                      id="hero-description"
                      value={content.home.hero.description}
                      onChange={(e) => updateContent(['home', 'hero', 'description'], e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-cta">Hero CTA</Label>
                    <Input
                      id="hero-cta"
                      value={content.home.hero.cta}
                      onChange={(e) => updateContent(['home', 'hero', 'cta'], e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features Content */}
            <Card>
              <CardHeader>
                <CardTitle>Features Section</CardTitle>
                <CardDescription>Manage the features displayed on your homepage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  {Object.entries(content.home.features).map(([key, feature]) => (
                    <div key={key} className="grid gap-4">
                      <div>
                        <Label htmlFor={`feature-${key}-title`}>{key.charAt(0).toUpperCase() + key.slice(1)} Title</Label>
                        <Input
                          id={`feature-${key}-title`}
                          value={feature.title}
                          onChange={(e) => updateContent(['home', 'features', key, 'title'], e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`feature-${key}-description`}>{key.charAt(0).toUpperCase() + key.slice(1)} Description</Label>
                        <Textarea
                          id={`feature-${key}-description`}
                          value={feature.description}
                          onChange={(e) => updateContent(['home', 'features', key, 'description'], e.target.value)}
                          rows={2}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Products Content */}
            <Card>
              <CardHeader>
                <CardTitle>Products Content</CardTitle>
                <CardDescription>Manage product information and pricing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="products-title">Products Page Title</Label>
                    <Input
                      id="products-title"
                      value={content.products.title}
                      onChange={(e) => updateContent(['products', 'title'], e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="products-subtitle">Products Page Subtitle</Label>
                    <Input
                      id="products-subtitle"
                      value={content.products.subtitle}
                      onChange={(e) => updateContent(['products', 'subtitle'], e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">Pure Argan Oil</h4>
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="product-name">Product Name</Label>
                      <Input
                        id="product-name"
                        value={content.products.pure_argan_oil.name}
                        onChange={(e) => updateContent(['products', 'pure_argan_oil', 'name'], e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="product-description">Product Description</Label>
                      <Textarea
                        id="product-description"
                        value={content.products.pure_argan_oil.description}
                        onChange={(e) => updateContent(['products', 'pure_argan_oil', 'description'], e.target.value)}
                        rows={2}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="product-size">Size</Label>
                        <Input
                          id="product-size"
                          value={content.products.pure_argan_oil.size}
                          onChange={(e) => updateContent(['products', 'pure_argan_oil', 'size'], e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="product-price">Price</Label>
                        <Input
                          id="product-price"
                          value={content.products.pure_argan_oil.price}
                          onChange={(e) => updateContent(['products', 'pure_argan_oil', 'price'], e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="media" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Media Management</CardTitle>
              <CardDescription>Upload and manage images and other media files</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-lg font-medium mb-2">Upload Images</p>
                <p className="text-muted-foreground mb-4">Drag and drop images here or click to browse</p>
                <Button>Choose Files</Button>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-4">Current Images</h4>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <Image className="h-8 w-8 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="design" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Design Settings</CardTitle>
              <CardDescription>Customize colors, fonts, and layout options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-4">Brand Colors</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="color-sage-light">Sage Light</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="color-sage-light"
                        type="color"
                        value="#C9D3CA"
                        className="w-12 h-12 p-1"
                      />
                      <span className="text-sm">#C9D3CA</span>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="color-sage-medium">Sage Medium</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="color-sage-medium"
                        type="color"
                        value="#929C92"
                        className="w-12 h-12 p-1"
                      />
                      <span className="text-sm">#929C92</span>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="color-taupe">Taupe</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="color-taupe"
                        type="color"
                        value="#A39384"
                        className="w-12 h-12 p-1"
                      />
                      <span className="text-sm">#A39384</span>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="color-charcoal">Charcoal</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="color-charcoal"
                        type="color"
                        value="#161313"
                        className="w-12 h-12 p-1"
                      />
                      <span className="text-sm">#161313</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Typography</h4>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="heading-font">Heading Font</Label>
                    <Select defaultValue="inter">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inter">Inter</SelectItem>
                        <SelectItem value="montserrat">Montserrat</SelectItem>
                        <SelectItem value="opensans">Open Sans</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="body-font">Body Font</Label>
                    <Select defaultValue="inter">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inter">Inter</SelectItem>
                        <SelectItem value="montserrat">Montserrat</SelectItem>
                        <SelectItem value="opensans">Open Sans</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure site-wide settings and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-4">Site Information</h4>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="site-title">Site Title</Label>
                    <Input id="site-title" defaultValue="Kapunka" />
                  </div>
                  <div>
                    <Label htmlFor="site-description">Site Description</Label>
                    <Textarea id="site-description" defaultValue="Quiet care for sensitive skin" rows={2} />
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact Information</h4>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" defaultValue="info@kapunka.com" />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input id="contact-phone" defaultValue="+34 900 000 000" />
                  </div>
                  <div>
                    <Label htmlFor="contact-address">Address</Label>
                    <Input id="contact-address" defaultValue="Calle Principal 1, Madrid, Spain" />
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">SEO Settings</h4>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="meta-title">Meta Title</Label>
                    <Input id="meta-title" defaultValue="Kapunka - Quiet care for sensitive skin" />
                  </div>
                  <div>
                    <Label htmlFor="meta-description">Meta Description</Label>
                    <Textarea id="meta-description" defaultValue="Pure argan oil taught through a simple, disciplined method for sensitive skin care." rows={2} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}