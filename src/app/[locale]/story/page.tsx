export const dynamic = 'force-dynamic';
export const revalidate = 0;
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import {
  User,
  Heart,
  Leaf,
  Shield,
  Globe,
  Scale,
  Quote
} from 'lucide-react';

export default async function StoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = useTranslations();
  const { locale } = await params;

  const values = [
    {
      icon: Heart,
      title: 'Purity & Simplicity',
      description: t('story.values.purity'),
      color: 'bg-[var(--kapunka-sage-light)]'
    },
    {
      icon: Leaf,
      title: 'Craft & Origin',
      description: t('story.values.craft'),
      color: 'bg-[var(--kapunka-sage-medium)]'
    },
    {
      icon: Shield,
      title: 'Dignity & Respect',
      description: t('story.values.dignity'),
      color: 'bg-[var(--kapunka-taupe)]'
    },
    {
      icon: Globe,
      title: 'Stewardship',
      description: t('story.values.stewardship'),
      color: 'bg-[var(--kapunka-sage-light)]'
    },
    {
      icon: Scale,
      title: 'Consistency & Transparency',
      description: t('story.values.consistency'),
      color: 'bg-[var(--kapunka-sage-medium)]'
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
              {t('story.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('story.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Brand Essence */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[var(--kapunka-sage-light)] to-[var(--kapunka-sage-medium)] rounded-lg p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">{t('story.essence.title')}</h2>
              <p className="text-lg leading-relaxed opacity-90">
                {t('story.essence.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-32 h-32 bg-[var(--kapunka-taupe)] rounded-full flex items-center justify-center mb-6">
                  <User className="h-16 w-16 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{t('story.founder.title')}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t('story.founder.description')}
                </p>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <Quote className="h-8 w-8 text-[var(--kapunka-sage-medium)] mb-4" />
                  <p className="text-xl font-medium italic text-[var(--kapunka-charcoal)]">
                    "{t('story.founder.quote')}"
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Clinical Background</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Mónica's experience as a nurse and manual therapist gave her unique insight into skin behavior and the importance of gentle, consistent care.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Medical Studies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Currently pursuing medical studies, Mónica brings scientific rigor to skincare, ensuring every product and method is backed by understanding and respect.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Kapunka represents the perfect balance of clinical precision and human touch—delivering results through quiet strength and pure care.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {t('story.values.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                        <div className={`w-12 h-12 ${value.color} rounded-full flex items-center justify-center`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Mission Statement */}
            <div className="mt-16 bg-gradient-to-r from-[var(--kapunka-sage-light)] to-[var(--kapunka-taupe)] rounded-lg p-12 text-white">
              <h3 className="text-2xl font-bold mb-4 text-center">Our Mission</h3>
              <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto opacity-90">
                To provide quiet strength and pure care for sensitive skin through simple, disciplined methods and honest, transparent practices. We believe that true luxury lies in simplicity, consistency, and respect—for the skin, for the craft, and for the people we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Moroccan Heritage</h2>
                <p className="text-lg text-muted-foreground">
                  Our argan oil comes from the heart of Morocco, where traditional methods meet modern quality standards. We work directly with women's cooperatives who have perfected the art of extracting this precious oil over generations.
                </p>
                <p className="text-lg text-muted-foreground">
                  Each batch is hand-pressed using time-honored techniques, ensuring that the oil retains its natural properties and beneficial compounds. This connection to origin isn't just about quality—it's about honoring the people and traditions behind every drop.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[var(--kapunka-sage-medium)] to-[var(--kapunka-charcoal)] rounded-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">From Source to Bottle</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Sustainably sourced from UNESCO biosphere</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Hand-harvested by local cooperatives</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Cold-pressed to preserve nutrients</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Batch-tracked for full transparency</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Fair trade practices throughout</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}