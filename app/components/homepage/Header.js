import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function Header() {
  return (
  <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
    <div className="flex items-center space-x-15">
      <div className='flex'>
      <img src="/wallet.png" alt="logo" className="h-8 w-8" />
      <h1 className="text-2xl font-bold text-blue-500 p-1" >Dreamfund</h1>
      </div>
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link href="/Goals" className="text-gray-700 hover:text-blue-600">
          Goals
        </Link>
        <Link href="/Progress" className="text-gray-700 hover:text-blue-600">
          Progress
        </Link>
        <Link href="/Settings" className="text-gray-700 hover:text-blue-600">
          Settings
        </Link>
      </nav>
      <div>
      </div>
    </div>
    </header>
  )
}

export default Header
