import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import { Droplet, ArrowRight } from 'lucide-react';

export default function ProductsPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = useTranslations();
  const { locale } = params;

  const products = [
    {
      id: 1,
      name: t('products.pure_argan_oil.name'),
      description: t('products.pure_argan_oil.description'),
      size: t('products.pure_argan_oil.size'),
      price: t('products.pure_argan_oil.price'),
      features: [
        '100% pure first-press argan oil',
        'Clear glass bottle',
        'Batch/lot number on every unit',
        'QR code for method access',
        'Suitable for sensitive skin'
      ],
      color: 'from-[var(--kapunka-sage-light)] to-[var(--kapunka-sage-medium)]'
    },
    {
      id: 2,
      name: t('products.professional_size.name'),
      description: t('products.professional_size.description'),
      size: t('products.professional_size.size'),
      price: t('products.professional_size.price'),
      features: [
        '100ml refillable bottle',
        'Perfect for spa back-bar',
        'Economical for professionals',
        'Hygienic pump dispenser',
        'Training materials included'
      ],
      color: 'from-[var(--kapunka-taupe)] to-[var(--kapunka-charcoal)]'
    },
    {
      id: 3,
      name: t('products.amenity_size.name'),
      description: t('products.amenity_size.description'),
      size: t('products.amenity_size.size'),
      price: t('products.amenity_size.price'),
      features: [
        'Perfect for hotel rooms',
        'Ideal for sampling',
        'Travel-friendly size',
        'Custom branding available',
        'QR code for guest education'
      ],
      color: 'from-[var(--kapunka-sage-light)] to-[var(--kapunka-taupe)]'
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
              {t('products.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`aspect-[4/3] bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="h-20 w-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <Droplet className="h-10 w-10" />
                    </div>
                    <p className="text-lg font-medium">{product.size}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-2 w-2 bg-[var(--kapunka-sage-medium)] rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">{product.price}</span>
                    <Button className="bg-[var(--kapunka-sage-medium)] hover:bg-[var(--kapunka-sage-medium)]/90">
                      {t('products.pure_argan_oil.add_to_cart')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Quality & Transparency</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Traceability</h4>
                  <p className="text-muted-foreground">
                    Every bottle features a visible batch/lot number, ensuring complete traceability from source to shelf.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Method Access</h4>
                  <p className="text-muted-foreground">
                    Scan the QR code on any product to access The Kapunka Method and learn the proper application technique.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Sustainable Packaging</h4>
                  <p className="text-muted-foreground">
                    Our clear glass bottles and minimalist design reflect our commitment to purity and environmental responsibility.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Compliance</h4>
                  <p className="text-muted-foreground">
                    Fully EU-compliant with complete documentation available for professional partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}