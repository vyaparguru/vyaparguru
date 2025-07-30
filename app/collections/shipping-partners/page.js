"use client"

import Service from '@/components/ReusableComponents/Service';

export default function ShippingPartners() {
    const services = [
        { name: "", slug: "",src:"" },
    ];

    const tools = [
        { name: "Shiprocket", slug: "shiprocket",src:"/sr.jpg" },
    ];

    const info = [{
        title: "Shipping Partners",
        src: "/sp.jpg",
        route: "shipping-partners",
    }]

    return (
        <Service
            title={info[0].title}
            src={info[0].src}
            services={services}
            tools={tools}
            route={info[0].route}
            image="/sp.jpg"
        />
    );
}
