import Image from "next/image";
import Button from "./button";

const HeroSection = () => {
  return (
    <div className="container m-auto flex flex-col xl:flex-row justify-between items-center pb-28 pt-10">
      {/* description */}
      <div className="w-full flex flex-col xl:w-[40%] mb-10 order-2 xl:order-none">
        <h1 className="font-[700] text-[40px] xl:text-[54px] font-playfair  xl:leading-[70px] md:leading-[65px] text-black">
          Adding a Touch of Elegance to Your Everyday Style!
        </h1>
        <p className="my-8 text-[17px] font-poppins">
          Discover beautifully handcrafted fascinators, bespoke bridal fans, and
          premium leather bags, perfect for every Ghanaian occasion. Whether
          it’s a wedding, traditional celebration, or an everyday statement, our
          designs are made for you.
        </p>
        {/* buttons */}
        <div className="">
          <Button className="bg-accent text-black rounded-lg w-64 h-16 font-[700] text-[17px] flex justify-center items-center" text="Explore our collections"/>
        </div>
      </div>

      {/* images */}
      <div className="xl:mr-8 grid grid-cols-2 gap-[15px] w-full xl:h-[480px] xl:w-[48%] order-1 xl:order-none">
        <Image
          className="h-[490px] rounded-lg w-[300px] object-cover"
          src="/assets/bluewoman.jpg"
          alt=""
          width="300"
          height="300"
        />
        <div className=" flex flex-col justify-between">
          <Image
            className="h-[240px] rounded-lg w-[280px] object-cover"
            src="/assets/whitewoman.jpg"
            alt=""
            width="300"
            height="300"
          />
          <Image
            className="h-[240px] rounded-lg w-[280px] object-cover"
            src="/assets/goldwoman.jpg"
            alt=""
            width="300"
            height="300"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
