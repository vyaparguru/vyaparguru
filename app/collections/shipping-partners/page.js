"use client"
import Link from 'next/link';
import Image from 'next/image';
import Service from '@/components/ReusableComponents/Service';

export default function ShippingPartners() {
    const services = [
        { name: "", slug: "",src:"/banner1.jpg" },
    ];

    const tools = [
        { name: "", slug: "" },
    ];

    const info = [{
        title: "Shipping Partners",
        src: "/404.webp",
        route: "shipping-partners",
    }]

    return (
        <Service
            title={info[0].title}
            src={info[0].src}
            services={services}
            tools={tools}
            route={info[0].route}
            image="/tr.jpg"
        />
    );
}
