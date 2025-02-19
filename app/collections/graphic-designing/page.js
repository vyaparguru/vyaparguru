"use client"

import Category from '@/components/ReusableComponents/Category'
import React from 'react'
import banner from "@/public/gd.jpg"
import lh from "@/public/lh.jpg"
import vc from "@/public/vc.jpg"
import { TbCards } from "react-icons/tb";
import { SlEnvolopeLetter } from "react-icons/sl";

export default function GraphicDesigning() {


  const title = "Graphic Designing";
  const subtitle = "Take your Graphic Designing to the next level.";

  const popularServices = [
    { id: 1, item: "Letterheads", icon: <SlEnvolopeLetter size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/letterheads" },
    { id: 2, item: "Visiting cards", icon: <TbCards size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/visiting-cards" },
  ];

  const marketingCategories = [
    { title: "Letterheads", services: [], image: lh },
    { title: "Visiting cards", services: [], image: vc },
  ];

  return (
    <>
      <Category
        bannerImage={banner}
        title={title}
        subtitle={subtitle}
        popularServices={popularServices}
        categories={marketingCategories}
      />
    </>
  )
}
