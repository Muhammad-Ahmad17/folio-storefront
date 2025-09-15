import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/use-scroll-animation';

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
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, visibleItems } = useStaggeredScrollAnimation(categories.length, 150);

  return (
    <section className="py-16 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          ref={titleRef}
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${titleVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Explore Our Categories
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Discover our comprehensive range of bulk manufacturing solutions across multiple industries
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={category.slug}
              className={`transition-all duration-700 ${visibleItems[index]
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Link
                to={`/products/${category.slug}`}
                className="group block transform-gpu"
              >
                <Card className="overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 hover:rotate-1 bg-card/80 backdrop-blur-sm">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${index === 0 ? 'from-blue-600/80 to-purple-600/80' :
                      index === 1 ? 'from-orange-600/80 to-red-600/80' :
                        index === 2 ? 'from-gray-600/80 to-slate-600/80' :
                          'from-green-600/80 to-emerald-600/80'
                      } to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300`} />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 text-white backdrop-blur-md border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:bg-white/30">
                        {category.productCount}+ Products
                      </Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                      <h3 className="text-lg sm:text-xl font-bold font-heading mb-1 sm:mb-2 group-hover:scale-105 group-hover:translate-x-2 transition-all duration-300">
                        {category.name}
                      </h3>
                      <p className="text-white/90 font-body text-xs sm:text-sm leading-relaxed line-clamp-2 group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                        {category.description}
                      </p>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <div className="bg-white/20 backdrop-blur-md rounded-full p-3 inline-block group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <svg className="w-6 h-6 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <p className="mt-2 text-sm font-medium group-hover:font-bold transition-all duration-200">View Products</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;