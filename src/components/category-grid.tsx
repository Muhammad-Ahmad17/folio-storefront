import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount?: number;
}

const categories: Category[] = [
  {
    name: 'Football Gear',
    slug: 'football',
    description: 'Professional-grade football equipment and apparel for champions',
    image: '/images/hero/football-hero.jpg',
    productCount: 3,
  },
  {
    name: 'Street Wears',
    slug: 'street-wears',
    description: 'Urban fashion and contemporary streetwear for modern lifestyle',
    image: '/images/hero/streetwear-hero.jpg',
    productCount: 3,
  },
];

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Explore Our Categories
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Discover our comprehensive collection of premium athletic wear and street fashion, designed for performance and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card key={category.slug} className="group overflow-hidden bg-gradient-card border border-border shadow-soft hover:shadow-large transition-all duration-normal">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-slow"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2">
                      {category.name}
                    </h3>
                    {category.productCount && (
                      <p className="text-sm opacity-90 font-body">
                        {category.productCount} Products
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <Button asChild className="w-full bg-primary hover:bg-primary-hover group-hover:shadow-glow transition-all duration-normal">
                  <Link to={`/products/${category.slug}`}>
                    Shop {category.name}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;