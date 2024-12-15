import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee } from 'lucide-react';
import { GREEK_TEXT } from '../constants/greek-text';

export default function Navbar() {
  return (
    <nav className="bg-aqua-dark text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8" />
            <span className="font-greek text-xl font-bold">Impresso Coffee</span>
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="hover:text-aqua-light transition font-greek">
              {GREEK_TEXT.nav.home}
            </Link>
            <Link to="/about" className="hover:text-aqua-light transition font-greek">
              {GREEK_TEXT.nav.about}
            </Link>
            <Link to="/menu" className="hover:text-aqua-light transition font-greek">
              {GREEK_TEXT.nav.menu}
            </Link>
            <Link to="/order" className="hover:text-aqua-light transition font-greek">
              {GREEK_TEXT.nav.order}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}