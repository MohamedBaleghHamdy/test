import Link from "next/link";
import React from "react";
import { RxSketchLogo, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";


const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-start">
          <Link href="/">
            <div className="bg-purple-800 cursor-pointer text-white p-3 rounded   ">
              <RxSketchLogo size={20} />
            </div>
          </Link>

          <Link href="/customers">
            <div className="bg-gray-100  hover:bg-gray-300 cursor-pointer my-4  p-3 rounded  ">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-100 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded  ">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>

        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
