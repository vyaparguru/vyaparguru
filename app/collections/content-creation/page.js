import Category from '@/components/Category'
import React from 'react'

import banner from "@/public/banner1.jpg"
import { FaPaintBrush } from 'react-icons/fa';

export default function ContentCreation() {


  const title = "Content Creation";
  const subtitle = "Take your Content Creation to the next level.";

  const popularServices = [
    { id: 1, item: "Graphic Designing", icon: <FaPaintBrush size={47} className="bg-blue-50 p-2 rounded-lg" /> },
  ];

  const marketingCategories = [
    { title: "Graphic Designing", services: [""], image: banner },
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