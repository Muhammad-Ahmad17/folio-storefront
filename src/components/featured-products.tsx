import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/use-scroll-animation';

const featuredProducts = [
  {
    id: "fb-001",
    title: "Pro Elite Football Jersey",
    slug: "pro-elite-football-jersey",
    shortDescription: "Professional-grade football jersey with moisture-wicking technology",
    price: 89.99,
    currency: "USD",
    images: ["/images/football/pro-elite-jersey.jpg"],
    categories: ["football"],
    tags: ["jersey", "pro", "moisture-wicking", "performance"],
  },
  {
    id: "sw-001",
    title: "Urban Legends Hoodie",
    slug: "urban-legends-hoodie",
    shortDescription: "Premium streetwear hoodie with contemporary urban design",
    price: 79.99,
    currency: "USD",
    images: ["/images/street-wears/urban-legends-hoodie.jpg"],
    categories: ["street-wears"],
    tags: ["hoodie", "urban", "streetwear", "casual", "premium"],
  },
  {
    id: "fb-002",
    title: "Championship Football Cleats",
    slug: "championship-football-cleats",
    shortDescription: "High-performance cleats designed for maximum traction and speed",
    price: 159.99,
    currency: "USD",
    images: ["/images/football/championship-cleats.jpg"],
    categories: ["football"],
    tags: ["cleats", "shoes", "traction", "performance", "professional"],
  },
];

const FeaturedProducts: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: productsRef, visibleItems } = useStaggeredScrollAnimation(featuredProducts.length, 200);
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation();

  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          ref={titleRef}
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-6 sm:mb-8">
            Discover our hand-picked selection of premium athletic wear and street fashion favorites.
          </p>
        </div>

        <div ref={productsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-700 ${visibleItems[index]
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} showCategory />
            </div>
          ))}
        </div>

        <div
          ref={buttonRef}
          className={`text-center transition-all duration-1000 ${buttonVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
        >
          <Button asChild size="lg" variant="outline" className="px-6 sm:px-8 text-sm sm:text-base">
            <Link to="/catalogue">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;