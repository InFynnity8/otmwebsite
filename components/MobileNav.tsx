"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
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
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div>
      <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
          {/* logo */}
        <div className="mt-20 mb-20 text-2xl text-center">
        <Link href="/" className="flex justify-center items-center">
          <div className="m-2 ml-0">
            <Image
              className="h-[56px] w-[65px] object-cover"
              src="/assets/logo.png"
              alt=""
              width= "300"
              height= "300"
            />
          </div>
          <h1 className="font-playfair text-[20px] xl:text-[28px] md:text-[24px] font-bold ">
              OTM DESIGNS
          </h1>
        </Link>

        </div>
        <nav className="flex flex-col justify-center items-center gap-5">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } capitalize text-[18px] hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
    </div>
  );
};

export default MobileNav;
