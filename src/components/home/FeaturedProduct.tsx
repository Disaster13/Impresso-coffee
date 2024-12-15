import React from 'react';
import { Link } from 'react-router-dom';
import { GREEK_TEXT } from '../../constants/greek-text';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const FeaturedProduct = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-aqua-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 font-greek">
          {GREEK_TEXT.home.featured.title}
        </h2>
        <Card className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd"
                alt="Utopia 9 blend"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-aqua-dark text-white p-4 rounded-full shadow-lg">
                <span className="font-bold">NEW</span>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-coffee-dark font-greek">
                {GREEK_TEXT.home.featured.blend}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed font-greek">
                {GREEK_TEXT.home.featured.description}
              </p>
              <Link to="/menu">
                <Button variant="secondary" className="font-greek">
                  {GREEK_TEXT.home.featured.viewMenu}
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};