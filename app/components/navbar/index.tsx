"use client";

import Container from "../container";
import SearchFilter from "./search-filter";
import Logo from "./logo";
import Link from "next/link";
import { FiGlobe } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderAvatar from "./header-avatar";
import { useState } from "react";

const Navbar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const toggleUserMenu = () => {
    setUserMenuOpen((prev) => !prev);
  };

  return (
    <nav className="shadow shadow-stone-200 py-4">
      <Container>
        <div className="flex justify-between items-center">
          <Link href={"/"} className="text-main">
            <Logo />
          </Link>
          <SearchFilter />
          <div className="flex items-center">
            <Link
              className="p-3 hover:bg-gray-100 rounded-3xl text-sm"
              href="/host/homes"
            >
              Airbnb your home
            </Link>
            <Link className="p-3 hover:bg-gray-100 rounded-3xl flex" href="/">
              <FiGlobe />
            </Link>
            <div
              onClick={toggleUserMenu}
              className=" flex items-center rounded-[30px] 
                  shadow-black-200 py-[7px] pr-[7px] pl-3 hover:shadow-gray-300
                  transition-shadow shadow-md border border-gray-200
                  cursor-pointer gap-3 text-gray-500 relative
                "
            >
              <GiHamburgerMenu />
              <HeaderAvatar />
              {userMenuOpen && (
                <div className="absolute top-[115%] right-0 overflow-hidden shadow-lg rounded-xl">
                  <ul className=" m-0 bg-white min-w-max w-[250px]">
                    <li className="p-3 hover:bg-slate-200 text-black text-sm font-semibold">
                      Sign Up
                    </li>
                    <li className="p-3 hover:bg-slate-200 text-black text-sm">
                      Log In
                    </li>
                    <li>
                      <div className="h-[1px] bg-slate-200"></div>
                    </li>
                    <Link href="/host/homes">
                      <li className="p-3 hover:bg-slate-200 text-black text-sm">
                        Airbnb Your Home
                      </li>
                    </Link>
                    <Link href="help">
                      <li className="p-3 hover:bg-slate-200 text-black text-sm">
                        Help Center
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
