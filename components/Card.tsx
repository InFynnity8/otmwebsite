import React from 'react'
import Image from "next/image"

interface Props {
    image: string
}


const Card: React.FC<Props> = ({image}) => {
  return (
    <div className='shadow-lg shadow-gray-400 w-[280px] h-[320px] rounded-lg overflow-hidden'>
         <Image
          className="h-full w-full object-cover"
          src={image}
          alt=""
          width="300"
          height="300"
        />
    </div>
  )
}

export default Card