import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MessageCircle, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Categories', 
      href: '/catalogue',
      submenu: [
        { name: 'Football Gear', href: '/products/football' },
        { name: 'Street Wears', href: '/products/street-wears' },
        { name: 'Corporate Uniforms', href: '/products/corporate-uniforms' },
        { name: 'Workwear', href: '/products/workwear' },
      ]
    },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  const secondaryNavItems = [
    { name: 'FAQs', href: '/faq' },
    { name: 'Customer Service', href: '/customer-service' },
    { name: 'Catalogue', href: '/catalogue' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Modern Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-border' 
          : 'bg-transparent pointer-events-none'
      }`}>
        <div className="container mx-auto px-6">
          <div className={`flex items-center justify-between transition-all duration-700 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            
            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {primaryNavItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                     <div 
                      className="relative group"
                      onMouseEnter={() => setCategoryDropdownOpen(true)}
                      onMouseLeave={() => setCategoryDropdownOpen(false)}
                    >
                      <Link
                        to={item.href}
                        className={`font-medium transition-all duration-300 px-4 py-2 rounded-lg flex items-center gap-1 pointer-events-auto ${
                          isScrolled 
                            ? 'text-foreground hover:text-primary hover:bg-primary/10' 
                            : 'text-white hover:text-white/80 hover:bg-white/10'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          categoryDropdownOpen ? 'rotate-180' : ''
                        }`} />
                      </Link>
                      
                      {/* Category Dropdown */}
                      <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-border z-50 transition-all duration-200 ${
                        categoryDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                      }`}>
                        <div className="p-4">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block p-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 group"
                            >
                              <div className="font-medium">{subItem.name}</div>
                              <div className="text-xs text-muted-foreground group-hover:text-primary/70 mt-1">
                                View all products
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`font-medium transition-all duration-300 px-4 py-2 rounded-lg pointer-events-auto ${
                        isScrolled 
                          ? 'text-foreground hover:text-primary hover:bg-primary/10' 
                          : 'text-white hover:text-white/80 hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Center Logo - Only visible when scrolled */}
            <div className={`flex-1 flex justify-center lg:flex-none transition-all duration-700 ${
              isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}>
              <Link to="/" className="hover:scale-105 transition-transform duration-200">
                <Logo size="md" />
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm transition-all duration-300 px-3 py-2 rounded-lg pointer-events-auto ${
                    isScrolled 
                      ? 'text-muted-foreground hover:text-foreground hover:bg-accent' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`p-2 rounded-lg transition-all duration-300 pointer-events-auto ${
                    isScrolled 
                      ? 'hover:bg-accent' 
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`p-2 rounded-lg transition-all duration-300 pointer-events-auto ${
                    isScrolled 
                      ? 'hover:bg-accent' 
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="sr-only">WhatsApp</span>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className={`p-2 rounded-lg transition-all duration-300 pointer-events-auto ${
                  isScrolled 
                    ? 'hover:bg-accent' 
                    : 'hover:bg-white/10 text-white'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-border bg-card mt-4 rounded-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {primaryNavItems.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-foreground px-3 py-2">
                          {item.name}
                        </div>
                        <div className="pl-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="border-t border-border pt-2 mt-2 space-y-1">
                  {secondaryNavItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="flex justify-center space-x-4 pt-2">
                  <Button variant="ghost" size="sm" className="p-2">
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;