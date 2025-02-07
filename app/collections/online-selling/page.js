"use client"

import Category from '@/components/ReusableComponents/Category'
import React from 'react'

import banner from "@/public/banner1.jpg"
import { PiMetaLogo } from "react-icons/pi";
import { TbSettingsBolt } from "react-icons/tb";
import { FaAmazon } from 'react-icons/fa';

export default function OnlineSelling() {


  const title = "Online Selling";
  const subtitle = "Take your Online Selling to the next level.";

  const popularServices = [
    { id: 1, item: "Sell on Amazon", icon: <FaAmazon size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/sell-on-amazon" },
  ];

  const marketingCategories = [
    { title: "Sell on Amazon", services: [], image: banner },
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
