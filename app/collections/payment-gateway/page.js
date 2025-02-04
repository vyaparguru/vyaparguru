"use client"

import Category from '@/components/Category'
import React from 'react'

import banner from "@/public/banner1.jpg"
import { MdOutlinePayments, MdPayment } from 'react-icons/md';

export default function PaymentGateway() {


  const title = "Payment Gateway";
  const subtitle = "Take your Payment Gateway to the next level.";

  const popularServices = [
    { id: 1, item: "Razorpay", icon: <MdPayment size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/razorpay" },
    { id: 1, item: "Cashfree", icon: <MdOutlinePayments size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/cashfree" },
  ];

  const marketingCategories = [
    { title: "Sell on Amazon", services: [], image: banner },
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
