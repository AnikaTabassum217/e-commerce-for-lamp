"use client";
import BannerCollection from "@/components/banner-collect/BannerCollection";
import Banner from "@/components/banner/Banner";
import { ProductButton } from "@/components/share/buttons/all-product-button/ProductButton";
import FooterBanner from "@/components/share/footer-banner/FooterBanner";
import Footer from "@/components/share/footer/Footer";
import Navbar from "@/components/share/navbar/Navbar";
import FeaturedProduct from "@/components/share/section-title/FeaturedProduct";
import { Sidebar } from "@/components/sidebar/Sidebar";
import Link from "next/link";

import React, { useState } from "react";

const Page = () => {
  //const playlists = ["Playlist 1", "Playlist 2", "Playlist 3"];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <Navbar onMenuClick={handleMenuClick}></Navbar>
      {/* <Sidebar className="custom-class" playlists={playlists} /> */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10">
          <Sidebar className="fixed top-0 left-0 w-64 h-full bg-white z-20" onClose={handleCloseSidebar} />
        </div>
      )}
      <div className="container mx-auto">
        <Banner></Banner>
        <BannerCollection></BannerCollection>
        <FeaturedProduct></FeaturedProduct>
        {/* <CardDesign></CardDesign> */}
        <div>
        <Link href="/all-products">
          <ProductButton></ProductButton>
        </Link>
        </div>
        <FooterBanner></FooterBanner>      
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Page;
