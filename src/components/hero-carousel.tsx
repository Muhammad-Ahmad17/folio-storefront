import React, { useCallback, useEffect } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSlide {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'Elite Football Collection',
    subtitle: 'Championship Ready',
    description: 'Professional-grade football gear trusted by athletes worldwide. Experience peak performance with our premium collection.',
    image: '/images/hero/football-hero.jpg',
    ctaText: 'Shop Football',
    ctaLink: '/products/football',
  },
  {
    id: '2',
    title: 'Urban Street Style',
    subtitle: 'Express Yourself',
    description: 'Contemporary streetwear that defines modern urban fashion. Comfort meets style in every piece.',
    image: '/images/hero/streetwear-hero.jpg',
    ctaText: 'Shop Streetwear',
    ctaLink: '/products/street-wears',
  },
  {
    id: '3',
    title: 'Performance Redefined',
    subtitle: 'Train Like a Pro',
    description: 'Cutting-edge athletic wear designed for champions. Elevate your performance with innovative sports technology.',
    image: '/images/hero/performance-hero.jpg',
    ctaText: 'Shop All',
    ctaLink: '/products',
  },
];

const HeroCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 800,
    },
    [
      Autoplay({ delay: 6000, stopOnInteraction: false })
    ]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden" style={{ height: 'calc(100vh - 3rem)' }}>
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {heroSlides.map((slide) => (
            <div key={slide.id} className="embla__slide relative h-full flex-[0_0_100%]">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 ease-out"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-hero" />

              <div className="relative h-full flex items-end justify-start">
                <div className="container mx-auto px-4 pb-20">
                  <div className="max-w-lg">
                    {slide.subtitle && (
                      <p className="text-sm md:text-base font-medium mb-2 opacity-90 font-body text-white">
                        {slide.subtitle}
                      </p>
                    )}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-heading leading-tight text-white">
                      {slide.title}
                    </h1>
                    <p className="text-sm md:text-base mb-6 opacity-90 font-body leading-relaxed text-white">
                      {slide.description}
                    </p>
                    <Link to={slide.ctaLink}>
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 text-base font-semibold shadow-large transform hover:scale-105 transition-all duration-normal"
                      >
                        {slide.ctaText}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="lg"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 h-12 w-12 p-0"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="lg"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 h-12 w-12 p-0"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-normal ${index === selectedIndex
                ? 'bg-white'
                : 'bg-white/50 hover:bg-white/75'
                }`}
              onClick={() => scrollTo(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;