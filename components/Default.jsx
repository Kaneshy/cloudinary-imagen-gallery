import Link from 'next/link'
import React, { useState } from 'react'
import UploadImg from './UploadImg'
import { IoMdCloudUpload } from "react-icons/io";


const Navbar = () => {

  const [isActive, setisActive] = useState(false)

  return (
    <nav className='fixed w-full top-0 flex flex-col p-4 bg-neutral-950'>
      <section className='flex justify-between p-4 bg-neutral-950'>
        <div className='t text-xl font-bold'>
          PixelArt
        </div>
        <div className=' '>
          <button className='py-1 px-2 bg-neutral-900 rounded-xl' onClick={() => setisActive(!isActive)}>
            <IoMdCloudUpload size={28} />
          </button>
        </div>
      </section>
      {isActive && (
        <UploadImg />
      )}
    </nav>
  )
}

export default Navbar