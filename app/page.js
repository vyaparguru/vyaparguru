// pages/index.js
"use client"

import FaqSection from '@/components/Accordion';
import Hero from '../components/Hero';
import About from './about/page';
import { Figures } from '@/components/Figures';
import Choose from '@/components/choose';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white">
        <Figures />
        <About/>
        <Choose/>
      </section>
      <FaqSection/>
    </>
  );
}
