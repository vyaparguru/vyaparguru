import Category from '@/components/Category'
import React from 'react'

import banner from "@/public/banner1.jpg"
import {  FaFileSignature, FaGlobe, FaIdCard } from 'react-icons/fa';

export default function BusinessSetup() {


  const title = "Business Setup";
  const subtitle = "Take your Business Setup to the next level.";

  const popularServices = [
    { id: 1, item: "Private Limited Company", icon: <FaFileSignature size={47} className="bg-blue-50 p-2 rounded-lg" />,href:"/collections/private-limited-company" },
    { id: 2, item: "Dubai Incorporation", icon: <FaGlobe size={47} className="bg-blue-50 p-2 rounded-lg" />,href:"/collections/dubai-incorporation" },
    { id: 3, item: "GST", icon: <FaIdCard size={47} className="bg-blue-50 p-2 rounded-lg" />,href:"/collections/gst" },
  ];

  const marketingCategories = [
    { title: "Business Registration", services: ["Private Limited Company"], image: banner },
    { title: "International Business", services: ["Dubai Incorportion"], image: banner },
    { title: "Licenses and Registrations", services: ["GST"], image: banner },
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