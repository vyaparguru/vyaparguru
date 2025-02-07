"use client"

import Category from '@/components/ReusableComponents/Category'
import React from 'react'

import banner from "@/public/banner1.jpg"
import { FaWix } from 'react-icons/fa';

export default function IT() {


  const title = "IT Services";
  const subtitle = "Take your IT to the next level.";

  const popularServices = [
    { id: 1, item: "Wix", icon: <FaWix size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/wix" },
  ];

  const marketingCategories = [
    { title: "Website Designing", services: ["Wix"], image: banner },
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
  )}