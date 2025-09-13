import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
    description: 'Professional football equipment and apparel for teams and athletes',
    image: '/images/hero/football-hero.jpg',
    productCount: 15,
  },
  {
    name: 'Street Wears',
    slug: 'street-wears',
    description: 'Urban fashion and lifestyle clothing for modern trends',
    image: '/images/hero/streetwear-hero.jpg',
    productCount: 20,
  },
  {
    name: 'Corporate Uniforms',
    slug: 'corporate-uniforms',
    description: 'Professional business attire and corporate wear solutions',
    image: '/images/hero/performance-hero.jpg',
    productCount: 25,
  },
  {
    name: 'Workwear',
    slug: 'workwear',
    description: 'Industrial safety gear and work clothing for all environments',
    image: '/images/hero/football-hero.jpg',
    productCount: 30,
  },
];

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Explore Our Categories
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Discover our comprehensive range of bulk manufacturing solutions across multiple industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              to={`/products/${category.slug}`}
              className="group block"
            >
              <Card className="overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    index === 0 ? 'from-blue-600/80 to-purple-600/80' :
                    index === 1 ? 'from-orange-600/80 to-red-600/80' :
                    index === 2 ? 'from-gray-600/80 to-slate-600/80' :
                    'from-green-600/80 to-emerald-600/80'
                  } to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300`} />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/20 text-white backdrop-blur-md border-white/20">
                      {category.productCount}+ Products
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold font-heading mb-2 group-hover:scale-105 transition-transform duration-300">
                      {category.name}
                    </h3>
                    <p className="text-white/90 font-body text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-3 inline-block">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <p className="mt-2 text-sm font-medium">View Products</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;