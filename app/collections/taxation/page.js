"use client"

import Category from '@/components/ReusableComponents/Category'
import React from 'react'

import banner from "@/public/banner1.jpg"
import { MdGavel, MdOutlinePayments, MdPayment } from 'react-icons/md';

export default function Taxation() {


  const title = "Taxation";
  const subtitle = "Take your Taxation to the next level.";

  const popularServices = [
    { id: 1, item: "GST Filing", icon: <MdGavel size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/gst-filing" },
    // { id: 1, item: "Cashfree", icon: <MdOutlinePayments size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/cashfree" },
  ];

  const marketingCategories = [
    { title: "GST Filing", services: [], image: banner },
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
