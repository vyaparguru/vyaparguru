"use client"

import Category from '@/components/Category'
import React from 'react'

import banner from "@/public/banner1.jpg"
import { MdOutlinePayments, MdPayment } from 'react-icons/md';
import { FaGlobe, FaTrademark } from 'react-icons/fa';

export default function InternationalBusiness() {


  const title = "International Business"
  const subtitle = "Take your International Business to the next level.";

  const popularServices = [
    { id: 1, item: "Dubai Incorporation", icon: <FaGlobe size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/dubai-incorporation" },
    // { id: 1, item: "Cashfree", icon: <MdOutlinePayments size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/cashfree" },
  ];

  const marketingCategories = [
    { title: "Dubai Incorporation", services: [], image: banner },
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
