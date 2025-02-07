"use client"

import Category from '@/components/ReusableComponents/Category'
import React from 'react'

import banner from "@/public/banner1.jpg"
import { FaFileSignature, FaTrademark } from 'react-icons/fa';

export default function BusinessRegistration() {


  const title = "Business Registration";
  const subtitle = "Take your Business Registration to the next level.";

  const popularServices = [
    { id: 1, item: "Private Limited Company", icon: <FaFileSignature size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/private-limited-company" },
    // { id: 1, item: "Cashfree", icon: <MdOutlinePayments size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/cashfree" },
  ];

  const marketingCategories = [
    { title: "Private Limited Company", services: [], image: banner },
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
