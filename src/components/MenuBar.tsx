import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const MenuBar = () => {
  return (
    <div className='h-screen sticky top-0 flex flex-col justify-between pt-2 pb-4'>
      {/* LOGO | MENU | POST */}
      <div className='flex flex-col gap-2 items-center xxl:items-start'>
        {/* LOGO */}
        <Link href='/'>
          <Image src='/icons/logo.svg' alt='logo' width={36} height={36} />
        </Link>

        {/* MENU */}
        <div className='flex flex-col gap-2'>
          {
            menuList.map(item => (
              <Link href={item.link} className='flex gap-4 items-center p-2 hover:bg-[#181818] hover:rounded-full' key={item.id}>
                <Image src={`/icons/${item.icon}`} alt={item.name} width={24} height={24} />
                <span className='hidden xxl:inline'>{item.name}</span>
              </Link>
            ))
          }

          {/* POST */}
          <Link href='/' className='flex items-center justify-center w-12 h-12 bg-white rounded-full xxl:hidden'>
            <Image className='' src='/icons/post.svg' alt='post' width={24} height={24} />
          </Link>
          <Link href='/' className='hidden py-3 px-28 bg-white text-black rounded-full xxl:inline'>
            <span >Post</span>
          </Link>
        </div>


      </div>

      {/* USER*/}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='relative w-10 h-10 rounded-full bg-red-600 p-2 overflow-hidden'>
            <Image src='/general/avatar.png' alt='profile' fill/>
          </div>
          <div className='hidden xxl:flex flex-col'>
            <span className='font-bold'>Sharath</span>
            <span className='text-gray-custom text-sm'>@sharxtx</span>
          </div>
        </div>
        <div className='hidden xxl:block cursor-pointer font-bold'>...</div>
      </div>
    </div>
  )
}

export default MenuBar