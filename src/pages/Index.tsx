import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroCarousel from '@/components/hero-carousel';
import FeaturedProducts from '@/components/featured-products';
import CategoryGrid from '@/components/category-grid';
import ScrollingBanner from '@/components/scrolling-banner';
import BenefitsSection from '@/components/benefits-section';
import LandingHeroOverlay from '@/components/landing-hero-overlay';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollingBanner className="fixed top-0 left-0 right-0 z-[60]" />
      <Header variant="landing" />
      <LandingHeroOverlay />
      <main>
        <HeroCarousel />
        <BenefitsSection />
        <FeaturedProducts />
        <CategoryGrid />

        {/* About Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
                About CORE Sports Wears
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                Since our founding, CORE Sports Wears has been dedicated to providing athletes and fashion enthusiasts with premium quality apparel that combines performance, comfort, and style. Our commitment to excellence drives us to continuously innovate and deliver products that meet the highest standards of the industry.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2 font-heading">500+</div>
                  <p className="text-muted-foreground font-body">Premium Products</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2 font-heading">50k+</div>
                  <p className="text-muted-foreground font-body">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2 font-heading">10+</div>
                  <p className="text-muted-foreground font-body">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
