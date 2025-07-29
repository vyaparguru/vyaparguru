"use client"

import Category from '@/components/ReusableComponents/Category'
import React from 'react'

import banner from "@/public/os.jpg"
import sp from "@/public/soa.jpg"
import { PiMetaLogo } from "react-icons/pi";
import { TbSettingsBolt } from "react-icons/tb";
import { FaAmazon } from 'react-icons/fa';

export default function Logistics() {


  const title = "Shipping Partners";
  const subtitle = "Take your Shipping Partners to the next level.";

  const popularServices = [
    { id: 1, item: "Shipping Partners", icon: <FaAmazon size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/shipping-partners" },
  ];

  const marketingCategories = [
    { title: "Shipping Partners", services: [], image: sp },
    // { title: "Whatsapp Marketing", services: [], image: banner },
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
