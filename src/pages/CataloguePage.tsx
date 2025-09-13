import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText, Image, Mail } from 'lucide-react';

const CataloguePage = () => {
  const catalogues = [
    {
      title: "Football Gear Collection",
      description: "Complete range of football jerseys, shorts, cleats, and training equipment",
      pages: "24 pages",
      fileSize: "12.5 MB",
      image: "/images/hero/football-hero.jpg"
    },
    {
      title: "Street Wear Collection",
      description: "Urban fashion including hoodies, joggers, caps, and streetwear essentials",
      pages: "18 pages",
      fileSize: "9.8 MB",
      image: "/images/hero/streetwear-hero.jpg"
    },
    {
      title: "Custom Design Portfolio",
      description: "Examples of custom designs and personalization options we offer",
      pages: "16 pages",
      fileSize: "8.2 MB",
      image: "/images/hero/performance-hero.jpg"
    }
  ];

  const handleDownload = (catalogueName: string) => {
    // In a real application, this would trigger an actual download
    alert(`Downloading ${catalogueName} catalogue...`);
  };

  const handleRequestPhysical = () => {
    const emailBody = `
Please send me a physical catalogue for CORE Sports Wears.

My details:
Name: 
Company: 
Address: 
Phone: 
Email: 

Thank you!
    `;
    
    const mailtoLink = `mailto:sales@coresportswears.com?subject=Physical Catalogue Request&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl font-bold font-heading text-foreground mb-8 text-center">
            Product Catalogues
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12 font-body">
            Browse our complete product catalogues and discover our full range of bulk manufacturing capabilities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {catalogues.map((catalogue, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={catalogue.image} 
                    alt={catalogue.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{catalogue.title}</CardTitle>
                  <CardDescription className="font-body">
                    {catalogue.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground font-body">
                    <span className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      {catalogue.pages}
                    </span>
                    <span>{catalogue.fileSize}</span>
                  </div>
                  <Button 
                    onClick={() => handleDownload(catalogue.title)}
                    className="w-full"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-heading">
                  <Mail className="h-5 w-5 text-primary" />
                  Request Physical Catalogue
                </CardTitle>
                <CardDescription>
                  Get a printed catalogue delivered to your address
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body mb-4">
                  Prefer a physical catalogue? We'll send you a printed version with fabric samples and detailed specifications.
                </p>
                <Button variant="outline" onClick={handleRequestPhysical} className="w-full">
                  Request Physical Catalogue
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-heading">
                  <Image className="h-5 w-5 text-primary" />
                  Custom Catalogue
                </CardTitle>
                <CardDescription>
                  Need a specific product range catalogue?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body mb-4">
                  We can create custom catalogues focused on specific product categories or your requirements.
                </p>
                <Button variant="outline" className="w-full">
                  Request Custom Catalogue
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold font-heading mb-4 text-center">
              Why Choose Our Catalogues?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold font-heading mb-2">Detailed Specifications</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Complete product details, sizing charts, and material specifications
                </p>
              </div>
              <div>
                <h3 className="font-semibold font-heading mb-2">Bulk Pricing</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Transparent pricing tiers for different quantity ranges
                </p>
              </div>
              <div>
                <h3 className="font-semibold font-heading mb-2">Customization Options</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Available customization and personalization options for each product
                </p>
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