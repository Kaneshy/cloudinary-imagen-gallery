import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-4'>
        <section className='t text-xl font-bold'>
            PixelArt
        </section>
        <section className='flex justify-between gap-4'>
            <Link href={'/'}>Atom</Link>
            <Link href={'/'}>Electron</Link>
            <Link href={'/'}>Proton</Link>
        </section>
    </nav>
  )
}

export default Navbar