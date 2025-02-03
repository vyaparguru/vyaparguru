"use client"

import FaqSection from "@/components/HomeScreen/Accordion";
import { Figures } from "@/components/HomeScreen/Figures";
import Hero from "@/components/HomeScreen/Hero";
import HomeAbout from "@/components/HomeScreen/HomeAbout";
import LetsTalk from "@/components/HomeScreen/Letstalk";
import { Procedure } from "@/components/HomeScreen/Procedure";
import { ServiceGallery } from "@/components/HomeScreen/ServiceGallery";
import Testimonials from "@/components/HomeScreen/Testimonials";



export default function Home() {
  return (
    <>
      <Hero />
      <Figures />
      <section className="bg-white">
        <HomeAbout />
        <ServiceGallery />
        <Procedure />
        <Testimonials />
      </section>
      <FaqSection />
      <LetsTalk />
    </>
  );
}
