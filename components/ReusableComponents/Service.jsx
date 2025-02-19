"use client"

import Image from 'next/image';
import { Tools } from './Tools';
import { FeaturedServices } from './FeaturedServices';

export default function Service({ title, src, services, tools, route }) {

    return (
        <div className="w-full py-20 md:py-20">
            <section className="h-[50vh] md:h-[70vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-40 py-24 md:py-0 bg-blue-50">
                <div className="w-full md:w-full text-center">
                    <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image src={src} alt="image1" width={500} height={500} className="rounded-lg" />
                </div>
            </section>

            <FeaturedServices services={services} route={route} />
            <Tools tools={tools} route={route} />

        </div>
    );
}
