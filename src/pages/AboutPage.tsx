import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-8">
              About CORE Sports Wears
            </h1>
            
            <div className="prose prose-lg max-w-none font-body text-muted-foreground">
              <p className="text-xl leading-relaxed mb-8">
                Founded with a passion for excellence, CORE Sports Wears has been at the forefront of athletic apparel and street fashion for over a decade. Our commitment to quality, performance, and style has made us a trusted choice for athletes and fashion enthusiasts worldwide.
              </p>
              
              <h2 className="text-2xl font-bold font-heading text-foreground mt-12 mb-6">Our Mission</h2>
              <p className="leading-relaxed mb-6">
                To provide premium quality athletic wear and street fashion that empowers individuals to perform at their best while expressing their unique style. We believe that great clothing should enhance both performance and confidence.
              </p>
              
              <h2 className="text-2xl font-bold font-heading text-foreground mt-12 mb-6">Our Values</h2>
              <ul className="space-y-4 mb-8">
                <li><strong className="text-foreground">Quality First:</strong> Every product meets our rigorous standards for materials, construction, and design.</li>
                <li><strong className="text-foreground">Innovation:</strong> We continuously research and develop new technologies to improve performance and comfort.</li>
                <li><strong className="text-foreground">Sustainability:</strong> Committed to responsible manufacturing and environmental stewardship.</li>
                <li><strong className="text-foreground">Community:</strong> Supporting athletes and communities through partnerships and initiatives.</li>
              </ul>
              
              <h2 className="text-2xl font-bold font-heading text-foreground mt-12 mb-6">Why Choose CORE?</h2>
              <p className="leading-relaxed mb-6">
                Our products are designed by athletes, for athletes. From professional sports equipment to contemporary streetwear, every piece in our collection is crafted with attention to detail and a deep understanding of what performers need.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
                <div className="text-center p-6 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2 font-heading">500+</div>
                  <p className="text-foreground font-medium">Premium Products</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2 font-heading">50k+</div>
                  <p className="text-foreground font-medium">Happy Customers</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2 font-heading">10+</div>
                  <p className="text-foreground font-medium">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;