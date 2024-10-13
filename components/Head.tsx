import React from "react";

interface Props {
  text: string;
}

const Head: React.FC<Props> = ({ text }) => {
  return (
    <h1 className="text-[45px] font-playfair font-[700] text-black py-6 flex flex-col justify-center items-center leading-[70px]">
      {text}
      <div className="bg-accent h-[9px] w-16 rounded-xl"/>
    </h1>
  );
};

export default Head;
