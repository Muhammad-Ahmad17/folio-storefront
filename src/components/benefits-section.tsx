import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Package, DollarSign } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Lowest Prices Guarantee",
      description: "Free Quote Free set-up Free sample for your approval. Totally Low Price Products."
    },
    {
      icon: Clock,
      title: "Fast Turn-Around",
      description: "Manufacturing time 12 days -15 days after approval sample ( sample 5-7 days )"
    },
    {
      icon: Package,
      title: "No Minimum Order",
      description: "There are no minimum orders , No order is too small or too large for us to handle."
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Premium materials and expert craftsmanship with full quality assurance on every order."
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full mb-3 sm:mb-4">
                  <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                </div>
                <h3 className="text-base sm:text-lg font-bold font-heading text-foreground mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground font-body text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;