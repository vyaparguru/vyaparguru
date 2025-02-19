"use client"

import Category from '@/components/ReusableComponents/Category'
import React from 'react'

import banner from "@/public/business.jpg"
import lr from "@/public/lr.jpg"
import ib from "@/public/ib.jpg"
import br from "@/public/br.jpg"
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
    { title: "Business Registration", services: ["Private Limited Company"], image: br },
    { title: "International Business", services: ["Dubai Incorportion"], image: ib },
    { title: "Licenses and Registrations", services: ["GST"], image: lr },
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