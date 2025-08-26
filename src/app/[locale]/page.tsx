import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight, Droplet, Hand, Leaf } from 'lucide-react';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <img
          src="images/IMG_20200328_170817-min.jpg"
          alt="A lifestyle photo showing Kapunka argan oil in a serene setting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
          <div className="space-y-8 max-w-xl">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {t('home.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('home.hero.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                {t('home.hero.description')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[var(--kapunka-sage-medium)] hover:bg-[var(--kapunka-sage-medium)]/90">
                <Link href={`/${locale}/method`}>
                  {t('home.hero.cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`/${locale}/products`}>
                  {t('navigation.products')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-[var(--kapunka-sage-light)] rounded-full flex items-center justify-center">
                  <Droplet className="h-6 w-6 text-[var(--kapunka-sage-medium)]" />
                </div>
                <CardTitle className="text-xl">{t('home.features.pure.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('home.features.pure.description')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-[var(--kapunka-sage-light)] rounded-full flex items-center justify-center">
                  <Hand className="h-6 w-6 text-[var(--kapunka-sage-medium)]" />
                </div>
                <CardTitle className="text-xl">{t('home.features.method.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('home.features.method.description')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-[var(--kapunka-sage-light)] rounded-full flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-[var(--kapunka-sage-medium)]" />
                </div>
                <CardTitle className="text-xl">{t('home.features.respect.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('home.features.respect.description')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('home.products.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('home.products.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Product 1 */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--kapunka-sage-light)] to-[var(--kapunka-sage-medium)] flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="h-16 w-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Droplet className="h-8 w-8" />
                  </div>
                  <p className="font-medium">30ml</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('products.pure_argan_oil.name')}</h3>
                <p className="text-muted-foreground mb-4">{t('products.pure_argan_oil.description')}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{t('products.pure_argan_oil.price')}</span>
                  <Button size="sm" className="bg-[var(--kapunka-sage-medium)] hover:bg-[var(--kapunka-sage-medium)]/90">
                    {t('products.pure_argan_oil.add_to_cart')}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--kapunka-taupe)] to-[var(--kapunka-charcoal)] flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="h-16 w-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Droplet className="h-8 w-8" />
                  </div>
                  <p className="font-medium">100ml</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('products.professional_size.name')}</h3>
                <p className="text-muted-foreground mb-4">{t('products.professional_size.description')}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{t('products.professional_size.price')}</span>
                  <Button size="sm" className="bg-[var(--kapunka-sage-medium)] hover:bg-[var(--kapunka-sage-medium)]/90">
                    {t('products.professional_size.add_to_cart')}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product 3 */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--kapunka-sage-light)] to-[var(--kapunka-taupe)] flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="h-16 w-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Droplet className="h-8 w-8" />
                  </div>
                  <p className="font-medium">2ml</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t('products.amenity_size.name')}</h3>
                <p className="text-muted-foreground mb-4">{t('products.amenity_size.description')}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{t('products.amenity_size.price')}</span>
                  <Button size="sm" className="bg-[var(--kapunka-sage-medium)] hover:bg-[var(--kapunka-sage-medium)]/90">
                    {t('products.amenity_size.add_to_cart')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href={`/${locale}/products`}>
                {t('home.products.view_all')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
