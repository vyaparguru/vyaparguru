// pages/index.js
"use client"

import FaqSection from '@/components/Accordion';
import Hero from '../components/Hero';
import About from './about/page';
import WhyUs from './why-us/page';
import { Figures } from '@/components/Figures';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-2 bg-white">
        <Figures/>
        <About/>
        <WhyUs />
      </section>
      <FaqSection/>
    </>
  );
}
