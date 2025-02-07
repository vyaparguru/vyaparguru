import Link from 'next/link'
import React from 'react'

export const FeaturedServices = ({services,route}) => {
    return (
        <section className="py-14 md:py-10 px-6 md:px-40">
            <h2 className="text-xl md:text-2xl font-semibold text-left mb-10">Featured services</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-20">
                {services.map((service, index) => (
                    <div className='flex flex-col md:gap-2'>
                        <div key={index} className="relative h-40 md:h-52 bg-gray-300 bg-cover bg-center rounded-lg flex items-end p-6" style={{ backgroundImage: `url(${service.src})` }} />
                        <Link href={`/collections/${route}/${service.slug}`} className="text-md mt-4">{service.name}</Link>
                    </div>
                ))}
            </div>
        </section>
    )
}
