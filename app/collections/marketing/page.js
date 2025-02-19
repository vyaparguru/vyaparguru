"use client"

import Category from '@/components/ReusableComponents/Category'
import React from 'react'

import banner from "@/public/marketing.jpg"
import dm from "@/public/dm.jpg"
import wm from "@/public/wm.webp"
import { PiMetaLogo } from "react-icons/pi";
import { TbSettingsBolt } from "react-icons/tb";

export default function Marketing() {


  const title = "Marketing";
  const subtitle = "Take your Marketing to the next level.";

  const popularServices = [
    { id: 1, item: "Social Media Management", icon: <TbSettingsBolt size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/social-media-management" },
    { id: 2, item: "Meta Ads", icon: <PiMetaLogo size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/meta-ads" },
  ];

  const marketingCategories = [
    { title: "Digital Marketing", services: ["Social Media Management", "Meta Ads"], image: dm },
    { title: "Whatsapp Marketing", services: [], image: wm},
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
