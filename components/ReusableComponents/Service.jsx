"use client"

import Image from 'next/image';
import { Tools } from './Tools';
import { FeaturedServices } from './FeaturedServices';

export default function Service({ title, services, tools, route, image }) {

    return (
        <div className="w-full py-20 md:py-20">
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${image})`,
      zIndex: 0,
    }}
  />

  {/* Foreground Blur Layer */}
  <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-40 py-24 md:py-0 bg-white/20 backdrop-blur-sm">
    <div className="w-full text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold">{title}</h1>
    </div>
  </div>
</section>


            <FeaturedServices services={services} route={route} />
            <Tools tools={tools} route={route} />

        </div>
    );
}
