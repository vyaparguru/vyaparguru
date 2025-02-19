"use client"

import Category from '@/components/ReusableComponents/Category'
import React from 'react'
import dm from "@/public/dm.jpg"
import smm from "@/public/smm.webp"
import ma from "@/public/ma.jpeg"
import { PiMetaLogo } from "react-icons/pi";
import { TbSettingsBolt } from "react-icons/tb";

export default function DigitalMarketing() {


  const title = "Digital Marketing";
  const subtitle = "Take your Digital Marketing to the next level.";

  const popularServices = [
    { id: 1, item: "Social Media Management", icon: <TbSettingsBolt size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/social-media-management" },
    { id: 2, item: "Meta Ads", icon: <PiMetaLogo size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/meta-ads" },
  ];

  const marketingCategories = [
    { title: "Social Media Management", services: [], image: smm },
    { title: "Meta Ads", services: [], image: ma},
  ];

  return (
    <>
      <Category
        bannerImage={dm}
        title={title}
        subtitle={subtitle}
        popularServices={popularServices}
        categories={marketingCategories}
      />
    </>
  )
}
