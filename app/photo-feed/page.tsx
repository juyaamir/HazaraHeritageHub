import React from 'react'
import Image from 'next/image'
import img1 from '@/app/photo-feed/images/image1.jpeg'
import img2 from '@/app/photo-feed/images/image2.webp'
import img3 from '@/app/photo-feed/images/image3.avif'
import img4 from '@/app/photo-feed/images/image4.jpg'
import img5 from '@/app/photo-feed/images/image5.jpg'
import img6 from '@/app/photo-feed/images/image6.webp'
import Link from 'next/link'
/* import Card from '@/app/photo-feed/components/Card' */
export const images = [
    {
        id: 1,
        src: img1,
        alt: 'image 1',
    },
    {
        id: 2,
        src: img2,
        alt: 'image 2',
    },
    {
        id: 3,
        src: img3,
        alt: 'image 3',
    },
    {
        id: 4,
        src: img4,
        alt: 'image 4',
    },
    {
        id: 5,
        src: img5,
        alt: 'image 5',
    },
    {
        id: 6,
        src: img6,
        alt: 'image 6',
    },
];

const PhotoFeed = () => {
  return (
    <div>
        <h1 className='text-xl text-center p-2'>My coding and hacking photos!</h1>
        <div className='flex flex-wrap gap-4'>
            {
            images.map((image) => (
                <div key={image.id} className=''>
                    <Link href={`/photo-feed/${image.id}`} className=' '>
                    <Image src={image.src} alt={image.alt} 
                    className='h-[15rem] w-[15rem] rounded-full hover:scale-110 duration-500 ease-in-out' />
                    </Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default PhotoFeed