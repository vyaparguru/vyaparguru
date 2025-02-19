"use client"

import Category from '@/components/ReusableComponents/Category'
import React from 'react'

import banner from "@/public/lr.jpg"
import gst from "@/public/gst.jpg"
import { MdOutlinePayments, MdPayment } from 'react-icons/md';
import { FaIdCard, FaTrademark } from 'react-icons/fa';

export default function LicensesAndRegistrations() {


  const title = "Licenses and Registrations";
  const subtitle = "Take your Licenses and Registrations to the next level.";

  const popularServices = [
    { id: 1, item: "GST", icon: <FaIdCard size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/gst" },
    // { id: 1, item: "Cashfree", icon: <MdOutlinePayments size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/cashfree" },
  ];

  const marketingCategories = [
    { title: "GST", services: [], image: gst },
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
