'use client';

import Image from 'next/image';
import { useState } from 'react';
import AccessModal from '@/components/ui/AccessModal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-b from-[#BC9471] to-[#C09A75]">
      <div className="container mx-auto px-4 flex flex-col md:grid md:grid-cols-2 gap-8 items-center h-full">
        <div className="block md:hidden relative h-[300px] sm:h-[400px] w-full">
          <Image
            src="/images/nicole.png"
            alt="Nicole Ari Parker"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="space-y-4 md:space-y-6 text-white text-left">
          <p className="uppercase tracking-wider text-[#623E2A] text-sm md:text-base">DISCOVER</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl">
            Nicole Ari Parker&apos;s
          </h1>
          <h2 className="font-serif text-xl sm:text-2xl md:text-4xl text-[#623E2A]">
            EXCLUSIVE SKINCARE REGIMEN
          </h2>
          <p className="max-w-lg text-sm sm:text-base">
            Dive into the secrets behind Nicole Ari Parker&apos;s ever-glowing skin
            with the products and services she uses for her daily skin routine.
            Known for her radiant complexion on and off set, Nicole&apos;s curated
            collection of skincare essentials, epitomizing opulence and
            sophistication, is now available to those, like herself, that appreciate
            the finer aspects of beauty.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-primary px-6 sm:px-8 py-2 sm:py-3 rounded text-sm sm:text-base"
          >
            Get Access
          </button>
        </div>
        <div className="hidden md:block relative h-full md:absolute md:right-0 md:w-1/2">
          <Image
            src="/images/nicole.png"
            alt="Nicole Ari Parker"
            fill
            className="object-contain md:object-cover"
            priority
          />
        </div>
      </div>

      <AccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}