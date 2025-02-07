"use client"
import Link from 'next/link';
import Image from 'next/image';
import Service from '@/components/ReusableComponents/Service';

export default function WhatsappMarketing() {
    const services = [
        { name: "WhatsApp API Setup", slug: "whatsapp-api-setup",src:"/banner1.jpg" },
        { name: "Meta Business Verification", slug: "meta-business-verification" },
        { name: "WhatsApp Marketing Campaign Management", slug: "whatsApp-marketing-campaign-management" },
        { name: "WhatsApp Chatbot Setup", slug: "whatsapp-chatbot-setup" },
    ];

    const tools = [
        { name: "AISensy", slug: "aisensy" },
        // { name: "Meta Business Verification", slug: "meta-business-verification" },
        // { name: "WhatsApp Marketing Campaign Management", slug: "whatsApp-marketing-campaign-management" },
        // { name: "WhatsApp Chatbot Setup", slug: "whatsapp-chatbot-setup" },
    ];

    const info = [{
        title: "WhatsApp Marketing",
        src: "/404.webp",
        route: "whatsapp-marketing",
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
