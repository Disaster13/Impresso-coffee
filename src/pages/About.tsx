import React from 'react';
import { GREEK_TEXT } from '../constants/greek-text';

export default function About() {
  return (
    <div className="bg-aqua-light min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31"
              alt="Το καφέ μας"
              className="h-full w-full object-cover"
            />
            <div className="p-8">
              <h1 className="text-4xl font-bold mb-6 font-greek">{GREEK_TEXT.about.title}</h1>
              <p className="text-gray-700 mb-6 font-greek">
                {GREEK_TEXT.about.story}
              </p>
              <p className="text-gray-700 mb-6 font-greek">
                {GREEK_TEXT.about.commitment}
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-aqua-light rounded-lg">
                  <h3 className="font-bold text-xl mb-2 font-greek">2019</h3>
                  <p className="text-sm font-greek">{GREEK_TEXT.about.stats.established}</p>
                </div>
                <div className="p-4 bg-aqua-light rounded-lg">
                  <h3 className="font-bold text-xl mb-2 font-greek">15+</h3>
                  <p className="text-sm font-greek">{GREEK_TEXT.about.stats.varieties}</p>
                </div>
                <div className="p-4 bg-aqua-light rounded-lg">
                  <h3 className="font-bold text-xl mb-2 font-greek">1000+</h3>
                  <p className="text-sm font-greek">{GREEK_TEXT.about.stats.customers}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}