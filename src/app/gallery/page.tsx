import React from 'react';
import Image from 'next/image';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const galleryImages = {
  nature: [
    { id: 1, src: '/images/gallery/nature/nature-1.jpg', alt: 'Lush green valleys of Bhutan' },
    { id: 2, src: '/images/gallery/nature/nature-2.jpg', alt: 'Himalayan mountains in Bhutan' },
    { id: 3, src: '/images/gallery/nature/nature-3.jpg', alt: 'Alpine forests in Bhutan' },
    { id: 4, src: '/images/gallery/nature/nature-4.jpg', alt: 'Clear mountain rivers in Bhutan' },
    { id: 5, src: '/images/gallery/nature/nature-5.jpg', alt: 'Scenic landscapes of Bhutan' },
    { id: 6, src: '/images/gallery/nature/nature-6.jpg', alt: 'Phobjikha Valley in Bhutan' },
    { id: 7, src: '/images/gallery/nature/nature-7.jpg', alt: 'Mountain views in Bhutan' },
    { id: 8, src: '/images/gallery/nature/nature-8.jpg', alt: 'Traditional farming in Bhutan' },
  ],
  festivals: [
    { id: 1, src: '/images/gallery/festivals/festival-1.jpg', alt: 'Paro Tsechu festival' },
    { id: 2, src: '/images/gallery/festivals/festival-2.jpg', alt: 'Traditional mask dances in Bhutan' },
    { id: 3, src: '/images/gallery/festivals/festival-3.jpg', alt: 'Thimphu Tsechu celebrations' },
    { id: 4, src: '/images/gallery/festivals/festival-4.jpg', alt: 'Colorful festival costumes' },
    { id: 5, src: '/images/gallery/festivals/festival-5.jpg', alt: 'Religious ceremonies in Bhutan' },
    { id: 6, src: '/images/gallery/festivals/festival-6.jpg', alt: 'Traditional Bhutanese festival' },
  ],
  food: [
    { id: 1, src: '/images/gallery/food/food-1.jpg', alt: 'Ema Datshi - Bhutanese chili and cheese dish' },
    { id: 2, src: '/images/gallery/food/food-2.jpg', alt: 'Bhutanese red rice' },
    { id: 3, src: '/images/gallery/food/food-3.jpg', alt: 'Traditional Bhutanese momos' },
    { id: 4, src: '/images/gallery/food/food-4.jpg', alt: 'Suja - butter tea' },
    { id: 5, src: '/images/gallery/food/food-5.jpg', alt: 'Local Bhutanese cuisine' },
  ],
  adventures: [
    { id: 1, src: '/images/gallery/adventures/adventure-1.jpg', alt: "Tiger's Nest hike in Bhutan" },
    { id: 2, src: '/images/gallery/adventures/adventure-2.jpg', alt: 'River rafting in Bhutan' },
    { id: 3, src: '/images/gallery/adventures/adventure-3.jpg', alt: 'Mountain biking in Bhutan' },
    { id: 4, src: '/images/gallery/adventures/adventure-4.jpg', alt: 'Trekking in Bhutan' },
    { id: 5, src: '/images/gallery/adventures/adventure-5.jpg', alt: 'Adventure camping in Bhutan' },
    { id: 6, src: '/images/gallery/adventures/adventure-6.jpg', alt: 'Hiking to remote monasteries' },
    { id: 7, src: '/images/gallery/adventures/adventure-7.jpg', alt: 'Hot stone bath experience' },
  ],
};

export default function Gallery() {
  return (
    <>
      {/* Banner */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="\images\gallery\gallery-1.jpg"
          alt="Bhutan Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bhutan Gallery</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Explore the breathtaking beauty, vibrant culture, and unique experiences Bhutan has to offer
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="nature" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-gray-100">
                <TabsTrigger value="nature" className="data-[state=active]:bg-bhutan-red data-[state=active]:text-white">Nature</TabsTrigger>
                <TabsTrigger value="festivals" className="data-[state=active]:bg-bhutan-red data-[state=active]:text-white">Festivals</TabsTrigger>
                <TabsTrigger value="food" className="data-[state=active]:bg-bhutan-red data-[state=active]:text-white">Food</TabsTrigger>
                <TabsTrigger value="adventures" className="data-[state=active]:bg-bhutan-red data-[state=active]:text-white">Adventures</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="nature">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.nature.map(image => (
                  <div key={image.id} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="festivals">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.festivals.map(image => (
                  <div key={image.id} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="food">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.food.map(image => (
                  <div key={image.id} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="adventures">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.adventures.map(image => (
                  <div key={image.id} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
