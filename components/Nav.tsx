"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
    const pathname = usePathname()

  return (
    <nav className="flex gap-6">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathname &&
            "border-b-2 border-black"
          } capitalize font-poppins text-[15.3px] hover:text-accent transition-all`}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
