import React from 'react'
import { images } from '@/app/photo-feed/page'
import Image from 'next/image'
interface ImageDetailsProps {
  params: {
    imageID: string;
  }
}
const ImageDetails: React.FC<ImageDetailsProps> = async ( {params}) => {

  const images2 = await images;
  const param = await params;
  const imageID = await parseInt(param.imageID, 10);
  const image = await images2.find((image) => image.id === imageID);

  return (
    <div className='flex flex-col gap-4 mx-auto'>
      <h1 className='text-center p-2 font-bold'>ImageDetails for image {imageID}</h1>
      {
        image ? (
          <div className='border border-gray-300 w-fit shadow-md rounded-full bg-green-500 flex flex-col gap-6'>
            <Image src={image.src} alt={image.alt} className='h-auto w-[30rem]'/>
            <p className='text-center text-white p-2 font-bold'>{image.alt}</p>
          </div>
        ) : (
          <p>Image not found</p>
        )
      }
    </div>
  )
}

export default ImageDetails