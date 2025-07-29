"use client"

import Image from 'next/image';
import { Tools } from './Tools';
import { FeaturedServices } from './FeaturedServices';

export default function Service({ title, services, tools, route, image }) {

    return (
        <div className="w-full py-20 md:py-20">
            <section
                className="h-[60vh] md:h-[70vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-40 py-24 md:py-0 opacity-90"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="w-full md:w-full my-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold z-20 ">{title}</h1>
                </div>
            </section>

            <FeaturedServices services={services} route={route} />
            <Tools tools={tools} route={route} />

        </div>
    );
}
