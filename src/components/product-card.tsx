import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  price: number;
  currency: string;
  images: string[];
  categories: string[];
  tags: string[];
}

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showCategory = false }) => {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(price);
  };

  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case 'football':
        return 'Football';
      case 'street-wears':
        return 'Street Wears';
      default:
        return category;
    }
  };

  return (
    <Card className="group bg-gradient-card border border-border shadow-soft hover:shadow-medium transition-all duration-normal hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-slow"
          loading="lazy"
        />
        {showCategory && product.categories.length > 0 && (
          <Badge 
            variant="secondary" 
            className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm"
          >
            {getCategoryDisplayName(product.categories[0])}
          </Badge>
        )}
        {product.tags.includes('pro') && (
          <Badge 
            variant="default" 
            className="absolute top-3 right-3 bg-primary text-primary-foreground"
          >
            Pro
          </Badge>
        )}
      </div>

      <CardContent className="p-6">
        <h3 className="font-heading font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 font-body line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold font-heading text-primary">
            {formatPrice(product.price, product.currency)}
          </span>
          <div className="flex gap-1">
            {product.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="flex w-full gap-3">
          <Button asChild variant="outline" className="flex-1">
            <Link to={`/products/${product.categories[0]}/${product.slug}`}>
              View Details
            </Link>
          </Button>
          <Button className="flex-1 bg-primary hover:bg-primary-hover">
            Quick Buy
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;