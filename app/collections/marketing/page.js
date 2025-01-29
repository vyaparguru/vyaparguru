import Category from '@/components/Category'
import React from 'react'

import banner from "@/public/banner1.jpg"
import { PiMetaLogo } from "react-icons/pi";
import { TbSettingsBolt } from "react-icons/tb";

export default function Marketing() {


  const title = "Marketing";
  const subtitle = "Take your Marketing to the next level.";

  const popularServices = [
    { id: 1, item: "Social Media Management", icon: <TbSettingsBolt size={47} className="bg-blue-50 p-2 rounded-lg" /> },
    { id: 2, item: "Meta Ads", icon: <PiMetaLogo size={47} className="bg-blue-50 p-2 rounded-lg" /> },
  ];

  const marketingCategories = [
    { title: "Digital Marketing", services: ["Social Media Management", "Meta Ads"], image: banner },
    { title: "Whatsapp Marketing", services: [], image: banner },
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
