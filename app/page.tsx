"use client";
import { Button } from "@/components/ui/button";
import AppNav from "@/components/ui/common/AppNav";
import Title from "@/components/ui/title";
import { useState, useEffect } from "react";
import BlogItem from "@/components/ui/BlogItem";
import Blogs from "@/components/ui/Blogs";

export default function Home() {
  return (
    <div>
      <AppNav />

      <Blogs />
    </div>
  );
}
