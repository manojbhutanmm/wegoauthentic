"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/gallery-1.jpg',
    alt: 'Tiger\'s Nest Monastery, Bhutan',
    caption: 'The iconic Tiger\'s Nest Monastery perched on a cliffside'
  },
  {
    id: 2,
    src: '/images/gallery/gallery-2.jpg',
    alt: 'Punakha Dzong, Bhutan',
    caption: 'The majestic Punakha Dzong surrounded by purple jacaranda trees'
  },
  {
    id: 3,
    src: '/images/gallery/gallery-3.jpg',
    alt: 'Prayer flags in Bhutan',
    caption: 'Colorful prayer flags against the backdrop of the Himalayas'
  },
  {
    id: 4,
    src: '/images/gallery/gallery-4.jpg',
    alt: 'Dochula Pass, Bhutan',
    caption: '108 chortens at Dochula Pass with mountain views'
  },
  {
    id: 5,
    src: '/images/gallery/gallery-5.jpg',
    alt: 'Bhutanese Festival, Bhutan',
    caption: 'Traditional mask dancers at a Bhutanese festival'
  },
  {
    id: 6,
    src: '/images/gallery/gallery-6.jpg',
    alt: 'Bhutanese architecture',
    caption: 'Traditional Bhutanese architecture with detailed paintings'
  }
];

export const GallerySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bhutan-dark mb-4">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the beauty of Bhutan through our collection of stunning photographs capturing the country's magnificent landscapes, architecture, and cultural experiences.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <div className="relative group h-64 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform group-hover:scale-110 duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-sm">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <div className="text-center mt-8">
          <Link href="/gallery">
            <Button className="bg-bhutan-red text-white hover:bg-bhutan-red/90">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
