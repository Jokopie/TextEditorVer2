"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Menu, Search, LayoutGrid, Circle, Plus, EllipsisVertical, List, ArrowDownAZ, 
  Folder, ExternalLink, 
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react';

export default function UserInfo() {
  const [isOpen, setIsOpen] = useState(false);
  //dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { data: session } = useSession();

  return (
    <div>
      <div className='flex m-5 w-full h-16 items-center mb-1.5'>
        <Menu className='ml-2' />
        <label className='ml-5'>Document</label>
        {/* <div>{session?.user?.name}</div> */}
        <div className='dark:text-black dark:bg-neutral-200 h-3/4 flex border rounded-lg bg-slate-200 ml-96 items-center' style={{ width: '500px' }}>
          <Search className='ml-2'/>
          <label className='ml-2'>Search</label>
        </div>
        <LayoutGrid style={{ marginLeft: '220px' }} />
        <label className='ml-10'>Welcome, {session?.token.username}</label>
        {/* <Link href='/login'>
          <Circle className='ml-3 scale-125' />
        </Link> */}
        <div onClick={toggleDropdown} className="flex items-center cursor-pointer">
          <Circle className="ml-3 scale-125" />
        </div>
        {isOpen && (
        <div className="absolute right-0 mt-32 w-30 bg-white rounded-md shadow-lg py-2">
          <a href="/account" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Account
          </a>
          <a onClick={() => signOut()} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Sign Out
          </a>
        </div>
      )}
      </div>
      <div className='bg-slate-100 dark:bg-neutral-600 w-full' style={{ height: '320px' }}>
        <div className='flex'>
          <label className='mt-5 ml-52 inline-block'> Start a new document </label>
          <EllipsisVertical className='mt-5' style={{ marginLeft: '850px' }} />
        </div>
        <div className='flex'>
          <div>
            <Link href='/workspace'>
              <div className='dark: hover:border hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-48 flex items-center justify-center'>
                <Plus className="dark:text-black"/>
              </div>
              <label className='mt-5 inline-block ml-48'>Blank document</label>
            </Link>
          </div>
          <div>
            <div className='hover:border hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
            <label className='mt-5 inline-block ml-10'>Resume</label>
          </div>
          <div>
            <div className='hover:border hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
            <label className='mt-5 inline-block ml-10'>Letter</label>
          </div>
          <div>
            <div className='hover:border hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
            <label className='mt-5 inline-block ml-10'>Project</label>
          </div>
          <div>
            <div className='hover:border hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
            <label className='mt-5 inline-block ml-10'>Brochure</label>
          </div>
          <div>
            <div className='hover:border hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
            <label className='mt-5 inline-block ml-10'>Report</label>
          </div>
        </div>
      </div>
      <div>
        <div className='flex mt-5'>
          <label className='ml-52'>Recent documents</label>
          <List style={{ marginLeft: '800px' }} />
          <ArrowDownAZ className='ml-5' />
          <Folder className='ml-5' />
        </div>
        <div className='flex'>
          <div>
            <div className='border border-gray-500 hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-48 flex items-center justify-center'>
              <ExternalLink className="dark:text-black"/>
            </div>
            <label className='mt-5 inline-block ml-48'>Untitled document</label>
          </div>
          <div>
            <div className='border border-gray-500 hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
            <label className='mt-5 inline-block ml-10'>Untitled document</label>
          </div>
          <div>
            <div className='border border-gray-500 hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
            <label className='mt-5 inline-block ml-10'>Untitled document</label>
          </div>
          <div>
            <div className='border border-gray-500 hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
            <label className='mt-5 inline-block ml-10'>Untitled document</label>
          </div>
          <div>
            <div className='border border-gray-500 hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
            <label className='mt-5 inline-block ml-10'>Untitled document</label>
          </div>
          <div>
            <div className='border border-gray-500 hover:border-sky-400 mt-5 bg-white w-36 h-44 ml-10 flex items-center justify-center'></div>
            <label className='mt-5 inline-block ml-10'>Untitled document</label>
          </div>
        </div>
      </div>
  </div>
  );
}
