import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  subcategories?: Category[];
}

const categories: Category[] = [
  {
    name: 'Football Gear',
    slug: 'football',
    description: 'Professional football equipment and apparel for teams and athletes',
    image: '/images/hero/football-hero.jpg',
    productCount: 15,
    subcategories: [
      { name: 'Jerseys', slug: 'football-jerseys', description: 'Team jerseys and uniforms', image: '/images/hero/football-hero.jpg', productCount: 8 },
      { name: 'Shorts', slug: 'football-shorts', description: 'Athletic shorts', image: '/images/hero/football-hero.jpg', productCount: 5 },
      { name: 'Cleats', slug: 'football-cleats', description: 'Professional cleats', image: '/images/hero/football-hero.jpg', productCount: 2 }
    ]
  },
  {
    name: 'Street Wears',
    slug: 'street-wears',
    description: 'Urban fashion and lifestyle clothing for modern trends',
    image: '/images/hero/streetwear-hero.jpg',
    productCount: 20,
    subcategories: [
      { name: 'Hoodies', slug: 'streetwear-hoodies', description: 'Urban style hoodies', image: '/images/hero/streetwear-hero.jpg', productCount: 12 },
      { name: 'Joggers', slug: 'streetwear-joggers', description: 'Comfortable joggers', image: '/images/hero/streetwear-hero.jpg', productCount: 6 },
      { name: 'Accessories', slug: 'streetwear-accessories', description: 'Caps and accessories', image: '/images/hero/streetwear-hero.jpg', productCount: 2 }
    ]
  },
  {
    name: 'Corporate Uniforms',
    slug: 'corporate-uniforms',
    description: 'Professional business attire and corporate wear solutions',
    image: '/images/hero/performance-hero.jpg',
    productCount: 25,
    subcategories: [
      { name: 'Shirts', slug: 'corporate-shirts', description: 'Formal shirts', image: '/images/hero/performance-hero.jpg', productCount: 15 },
      { name: 'Suits', slug: 'corporate-suits', description: 'Business suits', image: '/images/hero/performance-hero.jpg', productCount: 10 }
    ]
  },
  {
    name: 'Workwear',
    slug: 'workwear',
    description: 'Industrial safety gear and work clothing for all environments',
    image: '/images/hero/football-hero.jpg',
    productCount: 30,
    subcategories: [
      { name: 'Safety Vests', slug: 'workwear-vests', description: 'High-visibility vests', image: '/images/hero/football-hero.jpg', productCount: 18 },
      { name: 'Coveralls', slug: 'workwear-coveralls', description: 'Industrial coveralls', image: '/images/hero/football-hero.jpg', productCount: 12 }
    ]
  },
];

const CataloguePage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (slug: string) => {
    setExpandedCategories(prev => 
      prev.includes(slug) 
        ? prev.filter(s => s !== slug)
        : [...prev, slug]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header variant="default" />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-gradient-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                Our Product Catalogue
              </h1>
              <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                Explore our comprehensive range of bulk manufacturing solutions across multiple industries
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar */}
            <aside className="lg:w-80 space-y-6">
              <div className="bg-card rounded-xl border border-border p-6 shadow-soft">
                <h3 className="font-heading font-bold text-lg mb-4">Categories</h3>
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.slug}>
                      <button
                        onClick={() => toggleCategory(category.slug)}
                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors duration-200 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="font-medium text-foreground group-hover:text-primary">
                            {category.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {category.productCount}
                          </Badge>
                          <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                            expandedCategories.includes(category.slug) ? 'rotate-90' : ''
                          }`} />
                        </div>
                      </button>
                      
                      {/* Subcategories */}
                      {expandedCategories.includes(category.slug) && category.subcategories && (
                        <div className="ml-6 mt-2 space-y-1">
                          {category.subcategories.map((sub) => (
                            <Link
                              key={sub.slug}
                              to={`/products/${sub.slug}`}
                              className="block p-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200"
                            >
                              {sub.name} ({sub.productCount})
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              
              {/* View Controls */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold font-heading text-foreground">
                    All Categories
                  </h2>
                  <p className="text-muted-foreground">
                    {categories.reduce((acc, cat) => acc + cat.productCount, 0)} total products
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Categories Grid/List */}
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {categories.map((category, index) => (
                  <Link
                    key={category.slug}
                    to={`/products/${category.slug}`}
                    className="group block"
                  >
                    <Card className="overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
                      <div className={`relative overflow-hidden ${
                        viewMode === 'grid' ? 'aspect-[4/3]' : 'aspect-[5/2]'
                      }`}>
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
                        
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-xl font-bold font-heading mb-2 group-hover:scale-105 transition-transform duration-300">
                            {category.name}
                          </h3>
                          <p className="text-white/90 font-body text-sm leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                        
                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="bg-white/20 backdrop-blur-md rounded-full p-3 inline-block">
                              <ChevronRight className="w-6 h-6" />
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
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CataloguePage;