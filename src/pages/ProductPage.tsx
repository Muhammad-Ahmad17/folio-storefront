import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Star, ShoppingCart, Heart } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

// Sample product data - would be fetched from API in real app
const getProduct = (category: string, productSlug: string) => {
  const allProducts = {
    'football': [
      {
        id: "fb-001",
        title: "Pro Elite Football Jersey",
        slug: "pro-elite-football-jersey",
        shortDescription: "Professional-grade football jersey with moisture-wicking technology",
        description: "<p>Experience peak performance with our Pro Elite Football Jersey. Engineered with advanced moisture-wicking fabric that keeps you dry and comfortable during intense matches. Features reinforced stitching, ergonomic fit, and official team colors.</p><p>Perfect for professional players and serious enthusiasts who demand the best in athletic wear.</p>",
        price: 89.99,
        currency: "USD",
        images: ["/images/football/pro-elite-jersey.jpg"],
        specs: {
          material: "100% Polyester with DRI-FIT technology",
          sizes: ["XS", "S", "M", "L", "XL", "XXL"],
          care: "Machine wash cold, tumble dry low",
          features: ["Moisture-wicking", "Anti-odor", "Quick-dry"]
        },
        categories: ["football"],
        tags: ["jersey", "pro", "moisture-wicking", "performance"],
      },
    ],
    'street-wears': [
      {
        id: "sw-001",
        title: "Urban Legends Hoodie",
        slug: "urban-legends-hoodie",
        shortDescription: "Premium streetwear hoodie with contemporary urban design",
        description: "<p>Make a statement with our Urban Legends Hoodie. Crafted from premium cotton blend with a contemporary fit that defines modern street style. Features bold graphics, kangaroo pocket, and adjustable drawstring hood.</p><p>Perfect for layering or wearing as a statement piece. Represents the intersection of comfort, style, and urban culture.</p>",
        price: 79.99,
        currency: "USD",
        images: ["/images/street-wears/urban-legends-hoodie.jpg"],
        specs: {
          material: "80% Cotton, 20% Polyester fleece",
          sizes: ["XS", "S", "M", "L", "XL", "XXL"],
          fit: "Relaxed contemporary fit",
          features: ["Kangaroo pocket", "Drawstring hood", "Ribbed cuffs", "Screen-printed graphics"]
        },
        categories: ["street-wears"],
        tags: ["hoodie", "urban", "streetwear", "casual", "premium"],
      },
    ],
  };

  const categoryProducts = allProducts[category as keyof typeof allProducts] || [];
  return categoryProducts.find(p => p.slug === productSlug);
};

const ProductPage = () => {
  const { category, product: productSlug } = useParams<{ category: string; product: string }>();
  
  if (!category || !productSlug) {
    return <div>Product not found</div>;
  }

  const product = getProduct(category, productSlug);
  
  if (!product) {
    return <div>Product not found</div>;
  }

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-8 text-sm font-body">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link 
              to={`/products/${category}`} 
              className="text-muted-foreground hover:text-foreground transition-colors capitalize"
            >
              {category.replace('-', ' ')}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{product.title}</span>
          </div>

          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6">
            <Link to={`/products/${category}`} className="flex items-center space-x-2">
              <ChevronLeft className="h-4 w-4" />
              <span>Back to {category.replace('-', ' ')}</span>
            </Link>
          </Button>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  {product.tags.includes('pro') && (
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      Pro
                    </Badge>
                  )}
                  {product.tags.includes('premium') && (
                    <Badge variant="secondary">Premium</Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                  {product.title}
                </h1>
                <p className="text-xl text-muted-foreground font-body mb-6">
                  {product.shortDescription}
                </p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-primary font-heading">
                    {formatPrice(product.price, product.currency)}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(4.9/5)</span>
                  </div>
                </div>
              </div>

              {/* Size Selection */}
              {product.specs.sizes && (
                <div>
                  <h3 className="font-semibold font-heading mb-3">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.specs.sizes.map((size) => (
                      <Button key={size} variant="outline" size="sm">
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-4">
                <Button size="lg" className="flex-1 bg-primary hover:bg-primary-hover">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Product Features */}
              {product.specs.features && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold font-heading mb-4">Features</h3>
                    <ul className="space-y-2 font-body">
                      {product.specs.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Product Description */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold font-heading mb-6">Product Description</h2>
            <div 
              className="prose prose-lg max-w-none font-body"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>

          {/* Specifications */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold font-heading mb-6">Specifications</h2>
            <Card>
              <CardContent className="p-6">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 font-body">
                  <div>
                    <dt className="font-semibold text-foreground">Material</dt>
                    <dd className="text-muted-foreground">{product.specs.material}</dd>
                  </div>
                  {(product.specs as any).care && (
                    <div>
                      <dt className="font-semibold text-foreground">Care Instructions</dt>
                      <dd className="text-muted-foreground">{(product.specs as any).care}</dd>
                    </div>
                  )}
                  {(product.specs as any).fit && (
                    <div>
                      <dt className="font-semibold text-foreground">Fit</dt>
                      <dd className="text-muted-foreground">{(product.specs as any).fit}</dd>
                    </div>
                  )}
                  {(product.specs as any).weight && (
                    <div>
                      <dt className="font-semibold text-foreground">Weight</dt>
                      <dd className="text-muted-foreground">{(product.specs as any).weight}</dd>
                    </div>
                  )}
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;