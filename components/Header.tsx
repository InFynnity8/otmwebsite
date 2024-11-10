import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image"

const Header = () => {
  return (
    <header className=" fixed top-0 w-full bg-white">
      <div className="container mx-auto flex justify-between items-center ">
        {/* logo */}
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

        {/*desktop navbar & hire me btn*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            {/* <Button>Hire me</Button> */}
          </Link>
        </div>

        {/* mobile navbar */}
        <div className="xl:hidden"><MobileNav/></div>

      </div>
    </header>
  );
};

export default Header;
