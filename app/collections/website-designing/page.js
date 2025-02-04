"use client"

import Category from '@/components/Category'
import React from 'react'

import banner from "@/public/banner1.jpg"
import { MdOutlinePayments, MdPayment } from 'react-icons/md';
import { FaWix } from 'react-icons/fa';

export default function WebsiteDesigning() {


  const title = "Website Designing";
  const subtitle = "Take your Website to the next level.";

  const popularServices = [
    { id: 1, item: "Wix", icon: <FaWix size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/wix" },
    // { id: 1, item: "Cashfree", icon: <MdOutlinePayments size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/cashfree" },
  ];

  const marketingCategories = [
    { title: "Wix", services: [], image: banner },
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
