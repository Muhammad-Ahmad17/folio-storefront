import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ProductCard from '@/components/product-card';

const getProductsByCategory = (category: string) => {
  const footballProducts = [
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
    {
      id: "fb-003",
      title: "Training Shorts Pro",
      slug: "training-shorts-pro",
      shortDescription: "Lightweight training shorts with compression liner for optimal performance",
      price: 49.99,
      currency: "USD",
      images: ["/images/football/training-shorts.jpg"],
      categories: ["football"],
      tags: ["shorts", "training", "compression", "lightweight"],
    },
  ];

  const streetWearProducts = [
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
      id: "sw-002",
      title: "Midnight Joggers",
      slug: "midnight-joggers",
      shortDescription: "Sleek joggers with tapered fit and premium comfort for all-day wear",
      price: 64.99,
      currency: "USD",
      images: ["/images/street-wears/midnight-joggers.jpg"],
      categories: ["street-wears"],
      tags: ["joggers", "pants", "streetwear", "comfort", "tapered"],
    },
    {
      id: "sw-003",
      title: "Metro Snapback Cap",
      slug: "metro-snapback-cap",
      shortDescription: "Classic snapback with embroidered logo and structured crown",
      price: 29.99,
      currency: "USD",
      images: ["/images/street-wears/metro-snapback.jpg"],
      categories: ["street-wears"],
      tags: ["cap", "hat", "snapback", "streetwear", "accessory"],
    },
  ];

  switch (category) {
    case 'football':
      return footballProducts;
    case 'street-wears':
      return streetWearProducts;
    default:
      return [];
  }
};

const getCategoryTitle = (category: string) => {
  switch (category) {
    case 'football':
      return 'Football Gear';
    case 'street-wears':
      return 'Street Wears';
    default:
      return 'Products';
  }
};

const getCategoryDescription = (category: string) => {
  switch (category) {
    case 'football':
      return 'Professional-grade football equipment and apparel designed for peak performance on the field.';
    case 'street-wears':
      return 'Contemporary streetwear and urban fashion that blends style with comfort for modern lifestyle.';
    default:
      return 'Explore our collection of premium athletic wear and fashion.';
  }
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  if (!category) {
    return <div>Category not found</div>;
  }

  const products = getProductsByCategory(category);
  const categoryTitle = getCategoryTitle(category);
  const categoryDescription = getCategoryDescription(category);

  return (
    <div className="min-h-screen bg-background">
      <Header variant="default" />
      
      <main className="py-16 pt-20">
        <div className="container mx-auto px-4">
          {/* Category Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              {categoryTitle}
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              {categoryDescription}
            </p>
            <div className="mt-6 text-sm text-muted-foreground font-body">
              Showing {products.length} products
            </div>
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-heading text-foreground mb-4">No products found</h2>
              <p className="text-muted-foreground font-body">
                We're working on adding more products to this category. Check back soon!
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;