// pages/index.js
"use client"

import FaqSection from '@/components/Accordion';
import Hero from '../components/Hero';
import { Figures } from '@/components/Figures';
import NoCancellationPolicy from '@/components/NoCancellationPolicy';
import { ServiceGallery } from '@/components/ServiceGallery';
import { HomeAbout } from '@/components/HomeAbout';
import Testimonials from '@/components/Testimonials';
import { LetsTalk } from '@/components/Letstalk';
import { Procedure } from '@/components/Procedure';

export default function Home() {
  return (
    <>
      <Hero />
        <Figures />
      <section className="bg-white">
        <HomeAbout/>
      <NoCancellationPolicy/>
        <ServiceGallery/>
        <Procedure/>
        <Testimonials/>
      </section>
      <FaqSection/>
      <LetsTalk/>
    </>
  );
}
