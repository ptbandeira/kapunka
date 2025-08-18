import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import ContactForm from './ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = useTranslations();
  const { locale } = await params;

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'info@kapunka.com', description: 'General inquiries and support' },
    { icon: Phone, title: 'Phone', value: '+34 900 000 000', description: 'Monday to Friday, 9:00 - 18:00' },
    { icon: MapPin, title: 'Address', value: 'Calle Principal 1, Madrid, Spain', description: 'By appointment only' },
    { icon: Clock, title: 'Business Hours', value: 'Mon - Fri: 9:00 - 18:00', description: 'Weekend: Closed' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} className="border-0 shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-[var(--kapunka-sage-light)] rounded-full flex items-center justify-center flex-shrink-0">
                              <Icon className="h-5 w-5 text-[var(--kapunka-sage-medium)]" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{info.title}</h3>
                              <p className="text-sm text-muted-foreground">{info.value}</p>
                              <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a
                      href={`/${locale}/professionals`}
                      className="block text-sm text-muted-foreground hover:text-[var(--kapunka-sage-medium)] transition-colors"
                    >
                      Professional Partnerships →
                    </a>
                    <a
                      href={`/${locale}/products`}
                      className="block text-sm text-muted-foreground hover:text-[var(--kapunka-sage-medium)] transition-colors"
                    >
                      Product Information →
                    </a>
                    <a
                      href={`/${locale}/method`}
                      className="block text-sm text-muted-foreground hover:text-[var(--kapunka-sage-medium)] transition-colors"
                    >
                      The Kapunka Method →
                    </a>
                    <a
                      href={`/${locale}/story`}
                      className="block text-sm text-muted-foreground hover:text-[var(--kapunka-sage-medium)] transition-colors"
                    >
                      Our Story →
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Where can I buy Kapunka products?</h4>
                      <p className="text-sm text-muted-foreground">
                        Our products are available through professional partners, select hotels, and our online store.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Do you offer international shipping?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes, we ship throughout Europe and selected international destinations.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">How can I become a professional partner?</h4>
                      <p className="text-sm text-muted-foreground">
                        Please contact us through the professional inquiry form or email professionals@kapunka.com.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
            <div className="bg-gradient-to-br from-[var(--kapunka-sage-light)] to-[var(--kapunka-sage-medium)] rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="h-16 w-16 mx-auto mb-4 opacity-80" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm opacity-80">Calle Principal 1, Madrid, Spain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

