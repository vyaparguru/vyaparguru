"use client"

import Category from '@/components/ReusableComponents/Category'
import React from 'react'

import banner from "@/public/banner1.jpg"
import { MdOutlinePayments, MdPayment } from 'react-icons/md';
import { FaTrademark } from 'react-icons/fa';

export default function TrademarkAndIP() {


  const title = "Trademark and IP";
  const subtitle = "Take your Trademark and IP to the next level.";

  const popularServices = [
    { id: 1, item: "Trademark Registration", icon: <FaTrademark size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/trademark-registration" },
    // { id: 1, item: "Cashfree", icon: <MdOutlinePayments size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/cashfree" },
  ];

  const marketingCategories = [
    { title: "Trademark Registration", services: [], image: banner },
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
