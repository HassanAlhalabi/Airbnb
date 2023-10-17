'use client'

import Link from 'next/link'
import { MouseEventHandler, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchFilter = ({ onClick, isOpen }: { onClick?: MouseEventHandler<HTMLDivElement>; isOpen: boolean }) => {
  const [selected, setSelected] = useState<'EXPERIENCES' | 'STAYS'>('STAYS')

  return (
    <div className='min-h-[46px] flex flex-col justify-center w-fit col-span-2'>
      <div
        className={`flex items-center rounded-[30px] m-auto
                  shadow-black-200 py-[7px] pr-[7px] pl-4  hover:shadow-gray-300
                  transition-all shadow-md border border-gray-200
                  cursor-pointer gap-1 max-w-fit
                  ${isOpen && `scale-[2] translate-y-[100%] opacity-0 hidden`}
                `}
        onClick={onClick}
      >
        <span className='px-3 text-[14px] font-medium'>Anywhere</span>
        <span className='px-3 text-[14px] font-medium'>Any Week</span>
        <span className='px-3 text-[14px] font-light text-gray-500'>Add guests</span>
        <span className='w-[32px] h-[32px] bg-main rounded-full flex items-center justify-center text-white'>
          <AiOutlineSearch />
        </span>
      </div>
      <div className={`justify-center gap-3 mb-3 transition-all ${isOpen ? 'scale-1 flex' : 'scale-0 hidden'}`}>
        <div
          className='p-2 cursor-pointer relative 
                      after:absolute after:top-[100%] after:left-0 
                      after:w-[100%] after:scale-x-0 after:h-[2px] after:bg-black
                      hover:after:scale-x-[1] hover:after:bg-stone-400 
                      after:origin-center after:transition-all 
                      font-light text-sm'
          onClick={() => setSelected('STAYS')}
        >
          Stays
        </div>
        <div
          className='p-2 cursor-pointer border-b-2 border-transparent relative 
                      after:absolute after:top-[100%] after:left-0 
                      after:w-[100%] after:scale-x-0 after:h-[2px] after:bg-black
                      hover:after:scale-x-[1] hover:after:bg-stone-400 
                      after:origin-center after:transition-all 
                      font-light text-sm'
          onClick={() => setSelected('EXPERIENCES')}
        >
          Experiences
        </div>
        <div
          className='p-2 cursor-pointer border-b-2 border-transparent relative 
                      after:absolute after:top-[100%] after:left-0 
                      after:w-[100%] after:scale-x-0 after:h-[2px] after:bg-black
                      hover:after:scale-x-[1] hover:after:bg-stone-400 
                      after:origin-center after:transition-all 
                      font-light text-sm'
        >
          <Link href='/'>Online Experiences</Link>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'scale-1 h-[70px]' : 'scale-0 h-0'
        } overflow-hidden transition-all duration-300 flex rounded-full pl-6 pr-2 items-center border divide-x`}
      >
        <div className='flex flex-col p3 font-semibold text-xs w-[327px]'>
          <span>Where?</span>
          <input
            className='bg-transparent border-none outline-none shadow-none font-normal text-gray-500 text-sm'
            placeholder='Search destinations'
          />
        </div>

        <div className='flex flex-col p-3 font-semibold text-xs w-[130px] flex-nowrap'>
          <span className='block min-w-fit w-36'>{selected === 'STAYS' ? 'Check In' : 'Date'}</span>
          <span className='block min-w-fit w-36 font-normal text-gray-500 text-sm'>Add dates</span>
        </div>
        <div
          className={`flex flex-col p-3 font-semibold text-xs w-[130px] ${selected === 'EXPERIENCES' && 'invisible'}`}
        >
          <span className='block min-w-fit w-36'>Check out</span>
          <span className='block min-w-fit w-36 font-normal text-gray-500 text-sm'>Add dates</span>
        </div>

        <div className='flex flex-col p-3 font-semibold text-xs w-[210px]'>
          <span className='block min-w-fit w-36'>Who</span>
          <span className='block min-w-fit w-36 font-normal text-gray-500 text-sm'>Add guests</span>
        </div>
        <span className='w-[48px] h-[48px] bg-main rounded-full flex items-center justify-center text-white'>
          <AiOutlineSearch />
        </span>
      </div>
    </div>
  )
}

export default SearchFilter
