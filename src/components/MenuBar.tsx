import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MenuBar = () => {
  return (
    <div>
        {/* LOGO | MENU | POST */}
        <div className='h-screen'>
            {/* LOGO */}
            <Link href='/'>
                <Image src='/icons/logo.svg' alt='logo' width={32} height={32} />
            </Link>
        </div>

        {/* USER*/}
        <div></div>
    </div>
  )
}

export default MenuBar