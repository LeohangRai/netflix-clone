import { useEffect, useState } from 'react';
import NeflixLogo from '../assets/logo.png';

const navButtons = [
  'Home',
  'Series',
  'Films',
  'Trending',
  'Favorites',
  'Languages'
];

export default function NavBar() {
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 700) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    });
  }, []);
  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-16 py-6 flex items-center ${
          showBackground ? 'bg-black bg-opacity-80' : null
        }`}
      >
        <img className="h-16" src={NeflixLogo} alt="logo" />
        <div className="flex gap-7 ml-8">
          {navButtons.map((item) => (
            <div
              key={item}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
