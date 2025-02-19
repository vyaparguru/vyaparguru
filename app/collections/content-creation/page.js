"use client"

import Category from '@/components/ReusableComponents/Category'
import React from 'react'

import banner from "@/public/content.jpg"
import gd from "@/public/gd.jpg"
import { FaPaintBrush } from 'react-icons/fa';

export default function ContentCreation() {


  const title = "Content Creation";
  const subtitle = "Take your Content Creation to the next level.";

  const popularServices = [
    { id: 1, item: "Graphic Designing", icon: <FaPaintBrush size={47} className="bg-blue-50 p-2 rounded-lg" />,href:"/collections/graphic-designing" },
  ];

  const marketingCategories = [
    { title: "Graphic Designing", services: [""], image: gd },
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