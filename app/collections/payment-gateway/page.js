"use client"

import Category from '@/components/ReusableComponents/Category'
import React from 'react'

import banner from "@/public/pg.jpg"
import rp from "@/public/rp.jpg"
import cf from "@/public/cf.jpg"

import { MdOutlinePayments, MdPayment } from 'react-icons/md';

export default function PaymentGateway() {


  const title = "Payment Gateway";
  const subtitle = "Take your Payment Gateway to the next level.";

  const popularServices = [
    { id: 1, item: "Razorpay", icon: <MdPayment size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/razorpay" },
    { id: 1, item: "Cashfree", icon: <MdOutlinePayments size={47} className="bg-blue-50 p-2 rounded-lg" />, href:"/collections/cashfree" },
  ];

  const marketingCategories = [
    { title: "Razorpay", services: [], image: rp },
    { title: "Cashfree", services: [], image: cf },
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
