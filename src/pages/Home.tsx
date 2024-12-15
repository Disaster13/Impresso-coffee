import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedProduct } from '../components/home/FeaturedProduct';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <FeaturedProduct />
    </div>
  );
}