"use client"

import Category from '@/components/ReusableComponents/Category'
import React from 'react'

import banner from "@/public/ecom.jpg"
import os from "@/public/os.jpg"
import pg from "@/public/pg.jpg"
import { MdOutlinePayments, MdPayment } from 'react-icons/md';
import { FaAmazon } from 'react-icons/fa';

export default function Ecommerce() {


  const title = "eCommerce";
  const subtitle = "Take your eCommerce to the next level.";

  const popularServices = [
    { id: 1, item: "Sell on Amazon", icon: <FaAmazon size={47} className="bg-blue-50 p-2 rounded-lg" />,href:"/collections/sell-on-amazon" },
    { id: 2, item: "Razorpay", icon: <MdPayment size={47} className="bg-blue-50 p-2 rounded-lg" />,href:"/collections/razorpay" },
    { id: 3, item: "Cashfree", icon: <MdOutlinePayments size={47} className="bg-blue-50 p-2 rounded-lg" />,href:"/collections/cashfree" },
  ];

  const marketingCategories = [
    { title: "Online Selling", services: ["Sell on Amazon"], image: os },
    { title: "Payment Gateway", services: ["Razorpay", "Cashfree"], image: pg },
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