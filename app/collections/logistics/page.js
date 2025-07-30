"use client"

import Category from '@/components/ReusableComponents/Category'
import React from 'react'

import banner from "@/public/logis.jpg"
import sp from "@/public/sp.jpg"
import { PiMetaLogo } from "react-icons/pi";
import { TbSettingsBolt } from "react-icons/tb";
import { FaAmazon } from 'react-icons/fa';

export default function Logistics() {


  const title = "Logistics";
  const subtitle = "Take your Logistics to the next level.";

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
