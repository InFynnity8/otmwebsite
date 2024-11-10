import Head from "./Head";
import { FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="bg-primary">
      <div className="container m-auto flex flex-col justify-center items-center py-2 pt-[80px]">
        <Head text="Contact Us" />
        <p className="text-[16px] w-full mb-3 xl:mb-0 xl:w-[600px] text-center text-black">
          Ready to elevate your style? Contact us today and get your custom
          fascinator, bridal fan, or leather bag.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-5">
          <div className="xl:w-[210px] xl:h-[180px] w-full h-[70px] text-center flex flex-col justify-center items-center ">
            <h1 className="text-[15px] font-bold mb-1">EMAIL</h1>
            <p>otmdesigns@gmail.com</p>
          </div>
          <div className="xl:w-[210px] xl:h-[180px] w-full h-[70px] text-center flex flex-col justify-center items-center">
            <h1 className="text-[15px] font-bold mb-1">PHONE</h1>
            <p>+233543076690</p>
            <p>+233202268472</p>
          </div>
          <div className="xl:w-[210px] xl:h-[180px] w-full h-[70px] text-center flex flex-col justify-center items-center">
            <h1 className="text-[15px] font-bold mb-1">SOCIAL</h1>
            <p className="flex items-center justify-center"><FaInstagram className="text-[25px] mr-2"/>@otm_designs_</p>
          </div>
          <div className="xl:w-[210px] xl:h-[180px] w-full h-[70px] text-center flex flex-col justify-center items-center">
            <h1 className="text-[15px] font-bold mb-1">ADDRESS</h1>
            <p>Dome - Pillar 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
