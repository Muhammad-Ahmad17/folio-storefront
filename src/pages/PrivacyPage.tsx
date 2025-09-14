import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header variant="default" />
      <main className="py-16 pt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold font-heading text-foreground mb-8">Privacy Policy</h1>

          <div className="prose max-w-none font-body text-foreground">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              We collect information you provide directly to us, such as when you create an account,
              request a quote, or contact our customer service team for bulk orders and customizations.
            </p>

            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              Your information helps us provide customized quotes, process bulk orders,
              and maintain communication throughout the manufacturing process.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              We implement appropriate security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact our customer service team.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;