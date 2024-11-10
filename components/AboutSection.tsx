import Head from "./Head";
import { FaCheck } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <div className="container m-auto flex flex-col pt-[80px]">
      <Head text="About Us" />
      <div className="flex justify-between items-center my-10 pb-10 flex-col xl:flex-row">
        <div className="xl:border-r-[1px] border-black xl:h-[350px] flex justify-center items-center font-poppins text-[22px] w-full xl:w-[56%] xl:pr-10 xl:pt-5">
          At OTM Designs, we bring elegance to life through beautifully
          handcrafted fascinators, bridal fans, and leather bags. Each piece is
          designed with the utmost care to make you stand out on your special
          day or in your everyday life. We combine modern trends with
          traditional craftsmanship to offer bespoke accessories that make a
          statement.
        </div>
        <div className="flex justify-center w-full xl:w-[35%] flex-col">
          <h1 className="text-[30px] font-[700] my-5 text-center xl:text-left">Why Choose Us?</h1>
          <ul>
            <li className="flex items-center text-[23px] py-1">
              {" "}
              <FaCheck  className="m-2 mr-5 text-[25px]"/> Handcrafted to Perfection
            </li>
            <li className="flex items-center text-[23px] py-2">
              <FaCheck className="m-2 mr-5 text-[25px]"/>
              Custom Designs Available
            </li>
            <li className="flex items-center text-[23px] py-2">
              <FaCheck className="m-2 mr-5 text-[25px]"/>
              High-Quality Materials
            </li>
            <li className="flex items-center text-[23px] py-2">
              <FaCheck className="m-2 mr-5 text-[25px]"/>
              Elegant and Timeless
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
