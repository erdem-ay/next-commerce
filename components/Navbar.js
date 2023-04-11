import AppContext from "@/utils/context";
import Search from "./Search";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { useContext } from "react";

const Navbar = () => {
  const { cart } = useContext(AppContext)
  return (
    <nav className="fixed h-[8vh] bg-gray-800 flex justify-around w-full z-20">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center">

            <div className="mr-4 space-x-4">
              <Link href="/products">
                <i className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Products
                </i>
              </Link>
            </div>
            <Search />
            <Link href='/basket' className="flex relative" >
              <SlBasket className="text-white text-2xl ml-4 hover:text-orange-400" />
              <p className="absolute text-white w-3 text-xs text-center -top-2 right-0 bg-red-400 rounded-full">{cart.length}</p>
            </Link>
            <Link href="/login">
              <BsPersonCircle className="h-8 text-white text-2xl ml-4 hover:text-orange-400" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
