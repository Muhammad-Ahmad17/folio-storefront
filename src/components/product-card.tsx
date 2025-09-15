import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail } from 'lucide-react';

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
  const [isHovered, setIsHovered] = useState(false);

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
      case 'corporate-uniforms':
        return 'Corporate Uniforms';
      case 'workwear':
        return 'Workwear';
      default:
        return category;
    }
  };

  const handleContactForQuote = () => {
    const emailBody = `
I am interested in bulk ordering the following product:

Product: ${product.title}
Description: ${product.shortDescription}
Starting Price: ${formatPrice(product.price, product.currency)}

Please provide:
- Bulk pricing tiers
- Customization options
- Minimum order quantities
- Sample availability
- Lead times

My contact information:
Name: 
Company: 
Email: 
Phone: 
Estimated Quantity: 

Thank you!
    `;

    const mailtoLink = `mailto:sales@coresportswears.com?subject=Bulk Quote Request - ${product.title}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Card
      className="group bg-gradient-card border border-border shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:rotate-1 transform-gpu cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={product.images[0]}
          alt={product.title}
          className={`w-full h-48 sm:h-56 md:h-64 object-cover transition-all duration-700 ${isHovered ? 'scale-110 brightness-110' : 'scale-100'}`}
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
          <div className="absolute bottom-4 left-4 right-4 transform transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <Badge className="bg-primary/90 text-primary-foreground font-body backdrop-blur-sm">
              Bulk Pricing Available
            </Badge>
          </div>
        </div>
        {showCategory && product.categories.length > 0 && (
          <Badge
            variant="secondary"
            className={`absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-gray-900 font-semibold shadow-md border border-gray-200 transition-all duration-300 transform ${isHovered ? 'scale-110 -translate-y-1' : 'scale-100'}`}
          >
            {getCategoryDisplayName(product.categories[0])}
          </Badge>
        )}
        {product.tags.includes('pro') && (
          <Badge
            variant="default"
            className={`absolute top-3 right-3 bg-primary text-primary-foreground transition-all duration-300 transform ${isHovered ? 'scale-110 -translate-y-1 rotate-12' : 'scale-100'}`}
          >
            Pro
          </Badge>
        )}
      </div>

      <CardContent className="p-4 sm:p-6">
        <h3 className="font-heading font-semibold text-base sm:text-lg mb-2 text-gray-900 dark:text-gray-100 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1">
          {product.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 font-body line-clamp-2 transition-all duration-300 group-hover:text-gray-700">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-lg sm:text-2xl font-bold font-heading text-primary transition-all duration-300 group-hover:scale-110 origin-left">
            From {formatPrice(product.price, product.currency)}
          </span>
          <div className="flex gap-1 transition-all duration-300 group-hover:translate-x-1">
            {product.tags.slice(0, 2).map((tag, index) => (
              <Badge
                key={tag}
                variant="outline"
                className={`text-xs transition-all duration-300 hover:scale-110 ${isHovered ? 'animate-pulse' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 sm:p-6 pt-0">
        <div className="flex w-full gap-2 sm:gap-3 flex-col sm:flex-row">
          <Button asChild variant="outline" className="flex-1 text-xs sm:text-sm group/button relative overflow-hidden">
            <Link to={`/products/${product.categories[0]}/${product.slug}`} className="relative z-10">
              <span className="transition-transform duration-300 group-hover/button:translate-x-1">View Details</span>
              <div className="absolute inset-0 bg-primary/10 transform -translate-x-full group-hover/button:translate-x-0 transition-transform duration-300 -z-10"></div>
            </Link>
          </Button>
          <Button
            onClick={handleContactForQuote}
            className="flex-1 bg-primary hover:bg-primary-hover hover:shadow-medium transition-all duration-300 text-xs sm:text-sm group/quote relative overflow-hidden"
          >
            <Mail className={`h-3 w-3 sm:h-4 sm:w-4 mr-1 transition-all duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`} />
            <span className="transition-transform duration-300 group-hover/quote:translate-x-1">Request Quote</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/quote:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;