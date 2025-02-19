"use client"
import Link from 'next/link';
import Image from 'next/image';
import Service from '@/components/ReusableComponents/Service';

export default function GST() {
    const services = [
        { name: "", slug: "",src:"/banner1.jpg" },
        // { name: "Meta Business Verification", slug: "meta-business-verification" },
        // { name: "WhatsApp Marketing Campaign Management", slug: "whatsApp-marketing-campaign-management" },
        // { name: "WhatsApp Chatbot Setup", slug: "whatsapp-chatbot-setup" },
    ];

    const tools = [
        { name: "", slug: "" },
        // { name: "Meta Business Verification", slug: "meta-business-verification" },
        // { name: "WhatsApp Marketing Campaign Management", slug: "whatsApp-marketing-campaign-management" },
        // { name: "WhatsApp Chatbot Setup", slug: "whatsapp-chatbot-setup" },
    ];

    const info = [{
        title: "GST",
        src: "/404.webp",
        route: "gst",
    }]

    return (
        <Service
            title={info[0].title}
            src={info[0].src}
            services={services}
            tools={tools}
            route={info[0].route}
        />
    );
}
