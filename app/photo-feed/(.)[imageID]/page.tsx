import React from 'react'
import { images } from '@/app/photo-feed/page'
import Image from 'next/image'
interface ImageDetailsProps {
    params: {
        imageID: string;
    }
}
const InterImageDetails: React.FC<ImageDetailsProps> = async ( { params }) => {
    const param = await params;
    const imageID = await parseInt(param.imageID, 10);
    const image = await images.find((image) => image.id === imageID);
  return (
    <div className='absolute inset-0  min-h-screen bg-black bg-opacity-[20%] flex items-center justify-center'>
                {
            image ? (

            

                <div className='  flex flex-col items-center justify-center mx-auto gap-2 bg-green-600 w-fit font-bold text-white rounded-md '>
                    <h1 className='text-center p-2 font-bold '>Intercepted ImageDetails for image {imageID}</h1>
                    <Image src={image.src} className='h-[25rem] w-auto' alt={image.alt} />
                    <p className='p-2 text-white font-bold'>{image.alt}</p>
                </div>
                
            ) : (
                <p className='text-red-400 text-xl text-center'>Image not found</p>
            )
        }
        
        

    </div>
  ) 
}

export default InterImageDetails