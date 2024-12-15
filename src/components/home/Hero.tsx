import React from 'react';
import { Link } from 'react-router-dom';
import { GREEK_TEXT } from '../../constants/greek-text';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <div className="relative h-[80vh]">
      <img
        src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
        alt="Traditional Greek coffee shop"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-6xl font-bold mb-6 font-greek">{GREEK_TEXT.home.hero.title}</h1>
          <p className="text-2xl mb-8 font-greek">{GREEK_TEXT.home.hero.subtitle}</p>
          <Link to="/order">
            <Button size="lg" className="font-greek">
              {GREEK_TEXT.home.hero.cta}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};