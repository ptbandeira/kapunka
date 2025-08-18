import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getTranslations } from 'next-intl/server';
import { Droplet, Hand, Move, Pause, Clock, Shield, CheckCircle, Pointer } from 'lucide-react';

export default async function MethodPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  const steps = [
    { icon: Droplet, title: t('method.steps.dose.title'),  description: t('method.steps.dose.description'),  color: 'bg-[var(--kapunka-sage-light)]' },
    { icon: Hand,    title: t('method.steps.warm.title'),  description: t('method.steps.warm.description'),  color: 'bg-[var(--kapunka-sage-medium)]' },
    { icon: Pointer, title: t('method.steps.press.title'), description: t('method.steps.press.description'), color: 'bg-[var(--kapunka-taupe)]' },
    { icon: Move,    title: t('method.steps.glide.title'), description: t('method.steps.glide.description'), color: 'bg-[var(--kapunka-sage-light)]' },
    { icon: Pause,   title: t('method.steps.pause.title'), description: t('method.steps.pause.description'), color: 'bg-[var(--kapunka-sage-medium)]' }
  ];

  const hygieneRules = [
    { icon: Shield,     title: t('method.hygiene.clean_hands'),   description: 'Always start with clean hands to maintain product purity' },
    { icon: CheckCircle,title: t('method.hygiene.disinfect_tools'),description: 'Keep all tools and surfaces properly sanitized' },
    { icon: Pointer,    title: t('method.hygiene.keep_droppers'), description: 'Prevent contamination by keeping droppers away from direct skin contact' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('method.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('method.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--kapunka-sage-light)]" />
              <div className="space-y-12">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="relative flex items-start">
                      {/* Number */}
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-[var(--kapunka-sage-light)] rounded-full">
                        <div className={`w-10 h-10 ${step.color} rounded-full flex items-center justify-center`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="ml-8 flex-1">
                        <Card className="border-0 shadow-lg">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-2xl">{step.title}</CardTitle>
                              <span className="text-sm font-medium text-[var(--kapunka-sage-medium)]">Step {index + 1}</span>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-lg">{step.description}</CardDescription>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timing */}
            <div className="mt-16 bg-muted/30 rounded-lg p-8">
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-[var(--kapunka-sage-medium)] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">When to Apply</h3>
                  <p className="text-muted-foreground">{t('method.timing')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hygiene */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('method.hygiene.title')}</h2>
              <p className="text-lg text-muted-foreground">Essential hygiene practices for optimal results and product integrity</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hygieneRules.map((rule, index) => {
                const Icon = rule.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-lg">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto mb-4 bg-[var(--kapunka-sage-light)] rounded-full flex items-center justify-center">
                        <Icon className="h-8 w-8 text-[var(--kapunka-sage-medium)]" />
                      </div>
                      <CardTitle className="text-lg">{rule.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{rule.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Benefits */}
            <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Why The Method Matters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  ['Consistency', 'Following the method ensures consistent results every time'],
                  ['Efficacy', 'Proper technique maximizes the oil\'s beneficial properties'],
                  ['Experience', 'Creates a mindful, calming ritual for both practitioner and client'],
                  ['Education', 'Empowers users with knowledge for better skin care practices']
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--kapunka-sage-medium)] rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold mb-1">{title}</h4>
                      <p className="text-muted-foreground text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
