import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/product-card';
import { Button } from '@/components/ui/button';

// Sample featured products from our JSON data
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
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-8">
            Discover our hand-picked selection of premium athletic wear and street fashion favorites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} showCategory />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="px-8">
            <Link to="/products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;