// Navbar.js
'use client';

import Image from "next/image";
import Link from "next/link";
import { useScore } from "@/context/ScoreContext"; // Adjust the import path based on your directory structure

export default function Navbar() {
  const { score, resetScore } = useScore();

  const handleHomeClick = () => {
    resetScore();
  };

  return (
    <nav className='bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600 backdrop-blur-lg'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href="/" onClick={handleHomeClick}>
          <Image src='/logo.png' alt='Logo' width={100} height={24} priority 
            className="rounded-lg"
          />
        </Link>
        
        <div className='flex gap-2 bg-yellow-200 border-amber-300 border-2 rounded-full px-6 py-2 font-bold'>
          <span className='text-lg'>{score}</span> 
          <Image src='/coin.png' alt='Logo' width={30} height={30} priority />
        </div>
      </div>
    </nav>
  );
}
