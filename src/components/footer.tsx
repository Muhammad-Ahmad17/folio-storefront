import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const contactInfo = {
    address: "789 Industrial Park Drive, Manufacturing District, NY 10032",
    phone: "+1 (347) 892-1680",
    email: "info@coresportswears.com"
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Categories', href: '/products' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  const customerLinks = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Customer Service', href: '/customer-service' },
    { name: 'Catalogue', href: '/catalogue' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
  ];

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-heading font-bold">CORE</div>
              <div className="text-sm opacity-90 font-body">Sports Wears</div>
            </div>
            <p className="text-primary-foreground/80 font-body leading-relaxed">
              Premium athletic wear and street fashion for champions. Quality, performance, and style in every piece.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-heading">Contact Info</h3>
            <ul className="space-y-3 font-body">
              <li>
                <div className="text-sm opacity-90">Address:</div>
                <div className="text-sm">{contactInfo.address}</div>
              </li>
              <li>
                <div className="text-sm opacity-90">Phone:</div>
                <a href={`tel:${contactInfo.phone}`} className="text-sm hover:text-primary-foreground/80 transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <div className="text-sm opacity-90">Email:</div>
                <a href={`mailto:${contactInfo.email}`} className="text-sm hover:text-primary-foreground/80 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2 font-body">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-lg mb-4 mt-6 font-heading">Customer Support</h3>
            <ul className="space-y-2 font-body">
              {customerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-heading">Follow Us</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 h-9 w-9 p-0"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  </Button>
                );
              })}
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2 font-heading">Newsletter</h4>
              <p className="text-sm text-primary-foreground/80 mb-3 font-body">
                Get updates on new arrivals and exclusive offers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                />
                <Button size="sm" variant="secondary" className="px-4">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/80 font-body">
              © 2024 CORE Sports Wears. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link to="/privacy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Company Branding */}
          <div className="text-center mt-8 pt-8 border-t border-primary-foreground/20">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary-foreground tracking-wider">
              CORE SPORTS WEARS
            </h2>
            <p className="text-primary-foreground/60 mt-2 font-body">
              Manufacturing Excellence Since 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;