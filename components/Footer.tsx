"use client";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { BiCopyright } from "react-icons/bi";
import Image from "next/image"

const links = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "PRODUCTS",
    path: "/products",
  },
  {
    name: "ABOUT",
    path: "/about",
  },
  {
    name: "CONTACTS",
    path: "/contacts",
  },
];

const Footer = () => {
  return (
    <div className="container m-auto flex flex-col justify-center items-center py-10">
      <div className=" flex justify-center items-center">
      <Image
              className="h-[50px] w-[45px] object-cover mr-2"
              src="/assets/logo.png"
              alt=""
              width= "300"
              height= "300"
            />
             <h1 className="font-playfair text-[14px] text-black xl:text-[22px] md:text-[18px] font-bold ">
              OTM DESIGNS
          </h1>
      </div>
      <nav className="flex gap-7 py-4">
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={` capitalize font-poppins text-[14px] font-[500] hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      <div className="flex justify-center items-center">
        <FaFacebook className="text-[25px] "/>
        <FaInstagram className="text-[25px] mx-2"/>
        <FaWhatsapp className="text-[25px]"/>
      </div>
      <p className="flex justify-center items-center pt-[42px]"><BiCopyright />Copyright 2024. All rights reserved</p>
    </div>
  );
};

export default Footer;
