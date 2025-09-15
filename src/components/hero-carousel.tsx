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
    subtitle: 'NEW ARRIVALS',
    description: 'Professional-grade football gear trusted by champions worldwide. Experience unmatched performance with our premium collection designed for victory.',
    image: '/images/hero/football-hero.jpg',
    ctaText: 'Shop Football Gear',
    ctaLink: '/products/football',
  },
  {
    id: '2',
    title: 'Urban Street Collection',
    subtitle: 'TRENDING NOW',
    description: 'Contemporary streetwear that defines modern urban culture. Premium comfort meets cutting-edge style in every carefully crafted piece.',
    image: '/images/hero/streetwear-hero.jpg',
    ctaText: 'Shop Streetwear',
    ctaLink: '/products/street-wears',
  },
  {
    id: '3',
    title: 'Performance Athletic Wear',
    subtitle: 'BEST SELLERS',
    description: 'Revolutionary athletic apparel engineered for peak performance. Innovative materials and design technology for the modern athlete.',
    image: '/images/hero/performance-hero.jpg',
    ctaText: 'Shop Performance',
    ctaLink: '/products',
  },
];

const HeroCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 1200,
      startIndex: 0,
    },
    [
      Autoplay({ delay: 8000, stopOnInteraction: false })
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
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="embla" ref={emblaRef} style={{ height: '75vh', minHeight: '600px', maxHeight: '850px' }}>
          <div className="embla__container h-full">
            {heroSlides.map((slide) => (
              <div key={slide.id} className="embla__slide relative h-full flex-[0_0_100%]">
                <div className="h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                  <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] h-full">
                    {/* Content Side - 35% */}
                    <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12 bg-white">
                      <div className="max-w-md">
                        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-black text-white mb-6 tracking-wide shadow-lg">
                          ✨ {slide.subtitle}
                        </div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-6 font-heading leading-tight text-black">
                          {slide.title}
                        </h1>
                        <p className="text-sm md:text-base lg:text-lg mb-8 text-gray-600 leading-relaxed font-body">
                          {slide.description}
                        </p>
                        <div className="flex flex-col gap-4">
                          <Link to={slide.ctaLink} className="w-full">
                            <Button
                              size="lg"
                              className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-base font-bold rounded-xl shadow-lg transform hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 w-full group relative overflow-hidden"
                            >
                              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                                {slide.ctaText} →
                              </span>
                              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-gray-300 hover:border-black text-gray-700 hover:text-black hover:bg-gray-50 px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300 w-full group relative overflow-hidden transform hover:scale-105 hover:-translate-y-1"
                          >
                            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                              View Details
                            </span>
                            <div className="absolute inset-0 bg-gray-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Image Side - 65% */}
                    <div className="relative overflow-hidden bg-gray-100">
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
                        style={{ backgroundImage: `url(${slide.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                      {/* Trending Badge */}
                      <div className="absolute top-8 right-8 bg-black text-white px-6 py-3 rounded-full text-base font-bold shadow-xl">
                        🔥 TRENDING
                      </div>

                      {/* Price Tag Effect */}
                      <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-200">
                        <div className="text-sm text-gray-500 mb-2">Starting from</div>
                        <div className="text-3xl font-black text-black">$49.99</div>
                        <div className="text-xs text-gray-400 mt-1">Free shipping available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="lg"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 hover:bg-white hover:text-black h-12 w-12 p-0 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1/2 hover:translate-x-1 active:scale-95"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="lg"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 hover:bg-white hover:text-black h-12 w-12 p-0 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1/2 hover:-translate-x-1 active:scale-95"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
        <div className="flex space-x-1">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-300 rounded-full transform hover:scale-125 active:scale-90 ${index === selectedIndex
                ? 'w-2 h-2 bg-black scale-110 shadow-lg'
                : 'w-2 h-2 bg-gray-400 hover:bg-gray-600 hover:shadow-md'
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