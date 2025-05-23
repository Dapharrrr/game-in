'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full z-10">
      <div className="mx-auto w-full flex items-center justify-between px-4 py-3">
        {/* Logo */}
<div className="relative md:w-32 lg:w-40 lg:h-30">
  <Image
    src="/logo.png"
    alt="Logo Game'In"
    fill
    className="object-contain"
    priority
  />
</div>


        {/* Menu Desktop */}
<div className="hidden md:flex items-center space-x-10 flex-1 justify-end">
  <Link href="/home" className="text-white uppercase text-base tracking-wide px-3 relative">
    ACCUEIL
    <span className="block h-[2px] w-full bg-purple-500 mt-1 rounded-full" />
  </Link>
  <Link href="/experience" className="text-white uppercase text-base tracking-wide px-3 hover:text-purple-400">
    L&apos;EXPERIENCE GAME&apos;IN
  </Link>
  <Link href="/evenements" className="text-white uppercase text-base tracking-wide px-3 hover:text-purple-400">
    EVENEMENTS
  </Link>
  <Link href="/tarifs" className="text-white uppercase text-base tracking-wide px-3 hover:text-purple-400">
    TARIFS
  </Link>
  <Link href="/a-propos" className="text-white uppercase text-base tracking-wide px-3 hover:text-purple-400">
    A PROPOS
  </Link>
  <Link
    href="/contact"
    className="px-5 py-2 rounded-full border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-black transition duration-200 text-base"
  >
    CONTACT
  </Link>
</div>


        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white w-8 h-8 flex flex-col justify-center"
          >
            <span className="block w-full h-1 bg-white rounded mb-1" />
            <span className="block w-full h-1 bg-white rounded mb-1" />
            <span className="block w-full h-1 bg-white rounded" />
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0b0b0e] px-4 py-3 flex flex-col space-y-3">
          <Link href="/home" className="text-white uppercase text-sm">ACCUEIL</Link>
          <Link href="/experience" className="text-white uppercase text-sm">L&apos;EXPERIENCE GAME&apos;IN</Link>
          <Link href="/evenements" className="text-white uppercase text-sm">EVENEMENTS</Link>
          <Link href="/tarifs" className="text-white uppercase text-sm tracking-wide px-1 hover:text-purple-400">
            TARIFS
          </Link>
          <Link href="/a-propos" className="text-white uppercase text-sm">A PROPOS</Link>
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-black transition text-sm"
          >
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
}
