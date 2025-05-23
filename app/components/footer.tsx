import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function footer() {
  return (
    <div className='w-full bg-[#070707] text-[#ffffff]'>
<div className="w-[1219px] h-[190px] grid grid-cols-4 gap-8 text-white p-8 mx-auto">
  {/* Column 1: Logo */}
  <section>
    <div className="relative w-32 h-12">
      <Image
        src="/logo.png"
        alt="Logo Game'In"
        fill
        className="object-contain"
        priority
      />
    </div>
  </section>

  {/* Column 2: Quick Links */}
  <section className="flex flex-col space-y-2">
    <h4 className="font-bold mb-2">Liens rapides</h4>
    <Link href="/home" className="hover:text-purple-400">ACCUEIL</Link>
    <Link href="/experience" className="hover:text-purple-400">L&apos;EXPERIENCE GAME&apos;IN</Link>
    <Link href="/evenements" className="hover:text-purple-400">EVENEMENTS</Link>
    <Link href="/tarifs" className="hover:text-purple-400">TARIFS</Link>
    <Link href="/a-propos" className="hover:text-purple-400">A PROPOS</Link>
    <Link href="/contact" className="hover:text-purple-400">CONTACT</Link>
  </section>

  {/* Column 3: Contact Info */}
  <section className="flex flex-col space-y-1">
    <h4 className="font-bold mb-2">Informations de contact</h4>
    <span>gamein@gmail.com</span>
    <span>Paris 75001</span>
    <span>10H-13H / 15H-18H</span>
    <span>Du lundi au samedi</span>
    <span>+908 89097 890</span>
  </section>

  {/* Column 4: Social Icons */}
  <section className="flex flex-row items-start space-x-4">
    <a href="https://www.instagram.com/gameinparis/" target="_blank" rel="noopener noreferrer">
      <Image src="/instagram.svg" alt="Instagram" width={34} height={34} />
    </a>
    <a href="https://www.tiktok.com/@gameinparis" target="_blank" rel="noopener noreferrer">
      <Image src="/tiktok.svg" alt="TikTok" width={34} height={34} />
    </a>
    <a href="https://www.twitch.tv/gameinparis_" target="_blank" rel="noopener noreferrer">
      <Image src="/twitch.svg" alt="Twitch" width={34} height={34} />
    </a>
  </section>
</div>

            <span className="block h-[2px] w-full bg-[#D2D2D2] mt-25 rounded-full" />
            <section className='flex flex-row justify-center p-8 space-x-8'>
                <h4>Mentions Légales</h4>
                <h4>CGU/CGV</h4>
                <h4>Politique de confidentialité</h4>
            </section>
    </div>
  )
}

export default footer
