"use client"

import Category from '@/components/ReusableComponents/Category'
import React from 'react'

import banner from "@/public/banner1.jpg"
import { PiMetaLogo } from "react-icons/pi";
import { TbSettingsBolt } from "react-icons/tb";
import { MdGavel } from 'react-icons/md';
import { FaTrademark } from 'react-icons/fa';

export default function legal() {


  const title = "Legal, Book Keeping and Compliance";
  const subtitle = "Take your Legal, Book Keeping and Compliance to the next level.";

  const popularServices = [
    { id: 1, item: "GST Filing", icon: <MdGavel size={47} className="bg-blue-50 p-2 rounded-lg" />,href:"/collections/gst-filing" },
    { id: 2, item: "Trademark Registration", icon: <FaTrademark size={47} className="bg-blue-50 p-2 rounded-lg" />,href:"/collections/trademark-registration" },
  ];

  const marketingCategories = [
    { title: "Taxation", services: ["GST Filing"], image: banner },
    { title: "Trademark and IP", services: ["Trademark Registration"], image: banner },
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