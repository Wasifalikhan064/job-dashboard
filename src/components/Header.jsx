import React from "react";
import { Navbar, TextInput, Avatar } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBell, FaCommentAlt, FaChevronDown, FaBars } from "react-icons/fa";
import UserImage from "../assets/unsplash_OH2S9XAcLhc.png";
import Logo from "../assets/Group 29966.png";

export default function Header() {
  return (
      <Navbar className="flex items-center px-4 py-2 bg-white shadow-md">
        {/* <div className="md:hidden">
          <FaBars
          />
        </div> */}
        <div className="hidden md:block">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="hidden md:block">
          <TextInput
            type="text"
            placeholder="Search"
            rightIcon={AiOutlineSearch}
          />
        </div>
        <div className="md:hidden">
          <AiOutlineSearch />
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaBell className="text-gray-600 hover:text-black w-6 h-6 cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
          </div>
          <FaCommentAlt className="text-gray-600 hover:text-black w-6 h-6 cursor-pointer" />
          <div className="flex items-center space-x-2">
            <Avatar alt="user" rounded img={UserImage} />
            <span className="hidden md:inline font-medium">Admirrah John</span>
            <FaChevronDown className="text-gray-600 w-4 h-4 cursor-pointer" />
          </div>
        </div>
      </Navbar>
   
  );
}
