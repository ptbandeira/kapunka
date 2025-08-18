import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import {
  Building,
  Flower2,
  Spa,
  Hotel,
  Mail,
  Phone,
  Users,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

export default async function ProfessionalsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = useTranslations();
  const { locale } = await params;

  const professionalCategories = [
    {
      icon: Building,
      title: t('professionals.clinics.title'),
      description: t('professionals.clinics.description'),
      features: t.raw('professionals.clinics.features'),
      color: 'from-[var(--kapunka-sage-light)] to-[var(--kapunka-sage-medium)]',
      cta: 'Contact for Clinic Pricing'
    },
    {
      icon: Flower2,
      title: t('professionals.spas.title'),
      description: t('professionals.spas.description'),
      features: t.raw('professionals.spas.features'),
      color: 'from-[var(--kapunka-taupe)] to-[var(--kapunka-charcoal)]',
      cta: 'Contact for Spa Pricing'
    },
    {
      icon: Hotel,
      title: t('professionals.hotels.title'),
      description: t('professionals.hotels.description'),
      features: t.raw('professionals.hotels.features'),
      color: 'from-[var(--kapunka-sage-light)] to-[var(--kapunka-taupe)]',
      cta: 'Contact for Hotel Pricing'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Training & Certification',
      description: 'Comprehensive training program with official certification for your staff'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: '100% pure first-press argan oil with batch tracking and transparency'
    },
    {
      icon: Users,
      title: 'Client Satisfaction',
      description: 'Enhance your services with a product that delivers visible results'
    },
    {
      icon: Building,
      title: 'Brand Partnership',
      description: 'Co-branding opportunities and marketing support for partners'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {t('professionals.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('professionals.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Professional Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {professionalCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`aspect-[4/3] bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <div className="h-20 w-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                        <Icon className="h-10 w-10" />
                      </div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <CardDescription className="text-base mb-4">
                      {category.description}
                    </CardDescription>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="h-2 w-2 bg-[var(--kapunka-sage-medium)] rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-[var(--kapunka-sage-medium)] hover:bg-[var(--kapunka-sage-medium)]/90">
                      {category.cta}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Partner with Kapunka</h2>
              <p className="text-lg text-muted-foreground">
                Discover the benefits of adding Kapunka to your professional offerings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[var(--kapunka-sage-light)] rounded-full flex items-center justify-center">
                          <Icon className="h-6 w-6 text-[var(--kapunka-sage-medium)]" />
                        </div>
                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Support */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Professional Support</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[var(--kapunka-sage-light)] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-[var(--kapunka-sage-medium)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Training Materials</h3>
                      <p className="text-muted-foreground">
                        Detailed protocol cards, step-by-step guides, and video tutorials for your team
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[var(--kapunka-sage-light)] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-[var(--kapunka-sage-medium)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Marketing Assets</h3>
                      <p className="text-muted-foreground">
                        Co-branded materials, product images, and promotional content for your channels
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[var(--kapunka-sage-light)] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-[var(--kapunka-sage-medium)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Dedicated Support</h3>
                      <p className="text-muted-foreground">
                        Personal account manager and priority customer service for all partners
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[var(--kapunka-sage-light)] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-[var(--kapunka-sage-medium)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Compliance Documentation</h3>
                      <p className="text-muted-foreground">
                        All necessary regulatory documents, safety data, and certification information
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[var(--kapunka-sage-medium)] to-[var(--kapunka-taupe)] rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Get Started</h3>
                <p className="text-lg mb-6 opacity-90">
                  Join the growing network of clinics, spas, and hotels that trust Kapunka for their sensitive skin care needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" />
                    <span>professionals@kapunka.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <span>+34 900 000 001</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-white text-[var(--kapunka-sage-medium)] hover:bg-gray-100">
                  {t('professionals.contact')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('professionals.contact')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[var(--kapunka-sage-medium)] hover:bg-[var(--kapunka-sage-medium)]/90">
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}