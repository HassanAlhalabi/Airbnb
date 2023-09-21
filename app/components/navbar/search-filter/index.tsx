"use client";

import { AiOutlineSearch } from "react-icons/ai";

const SearchFilter = () => {
  return (
    <div
      className=" flex items-center rounded-[30px] 
                  shadow-black-200 py-[7px] pr-[7px] pl-4 divide-x
                divide-black-200 hover:shadow-gray-300
                  transition-shadow shadow-md border border-gray-200
                  cursor-pointer gap-1
                "
    >
      <span className="px-3 text-[14px] font-medium">Anywhere</span>
      <span className="px-3 text-[14px] font-medium">Any Week</span>
      <span className="px-3 text-[14px] font-light text-gray-500">
        Add guests
      </span>
      <span className="w-[32px] h-[32px] bg-[#ff385c] rounded-full flex items-center justify-center text-white w">
        <AiOutlineSearch />
      </span>
    </div>
  );
};

export default SearchFilter;
