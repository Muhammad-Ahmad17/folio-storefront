import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is your minimum order quantity?",
      answer: "We have no minimum order requirements. Whether you need 10 pieces or 10,000, we can handle orders of any size with the same attention to quality and service."
    },
    {
      question: "How long does manufacturing take?",
      answer: "Manufacturing time is typically 12-15 days after sample approval. Sample creation takes 5-7 days. We provide free samples for your approval before production begins."
    },
    {
      question: "Do you offer customization services?",
      answer: "Yes! We specialize in custom designs, logos, colors, and specifications. Our team works closely with you to bring your vision to life with professional customization options."
    },
    {
      question: "What are your pricing terms?",
      answer: "We offer the lowest prices guaranteed with free quotes and setup. Pricing depends on quantity, customization level, and materials. Contact us for a detailed quote."
    },
    {
      question: "Do you ship worldwide?",
      answer: "Yes, we provide free delivery worldwide for bulk orders. We work with reliable shipping partners to ensure your products arrive safely and on time."
    },
    {
      question: "Can I get a sample before placing a bulk order?",
      answer: "Absolutely! We provide free samples for your approval. This ensures you're completely satisfied with the quality and design before we proceed with your bulk order."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, PayPal, and trade assurance. Payment terms can be discussed based on order size and customer relationship."
    },
    {
      question: "Do you have quality guarantees?",
      answer: "Yes, we stand behind our products with comprehensive quality guarantees. If you're not satisfied with the quality, we'll work with you to make it right."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header variant="default" />
      <main className="py-16 pt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold font-heading text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12 font-body">
            Find answers to common questions about our bulk manufacturing and customization services.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold font-heading">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;