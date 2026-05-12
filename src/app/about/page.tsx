import Button from '@/components/button'
import Image from 'next/image'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FSA - About',
  description: 'About Page',
}

const About = () => {
  return (
<div className="h-[79vh]  mx-auto flex flex-col items-center justify-start   font-sans ">
  
  {/* banner */}
  <div className="relative w-[90%] h-88">
    
    <Image
      src="/carbaner.jpg"
      fill
      alt="AboutUs"
      className="object-cover sepia-10"
    />

    {/* overlay text */}
    <div className="absolute px-8 py-2 bottom-20 flex flex-col items-start  justify-center text-white bg-black/40">
      <h1 className="text-3xl font-bold">Short Introduction</h1>
      <h2 className="text-lg">Award-winning digital car rental experience</h2>
    </div>

  </div>

  {/* content */}
  <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-25 items-start justify-between text-black  dark:text-white pt-10">

    {/* Who we are */}
    <div className="md:w-1/2 space-y-4 ">
      <h1 className="text-3xl font-bold">Who we are ?</h1>
      <p className="text-[17px] leading-relaxed dark:text-gray-100 w-[95%] text-justify">
        We are a modern car rental company focused on providing reliable, affordable, and high-quality vehicles for every need.
      </p>
      <p className="text-[17px] leading-relaxed dark:text-gray-100 w-[95%]">
        Our goal is to make mobility simple, flexible, and accessible, whether for daily use, business trips, or special occasions.
      </p>
    </div>

    {/* What we do */}
    <div className="md:w-1/2 space-y-4 ">
      <h1 className="text-3xl font-bold">What we do ?</h1>
      <p className="text-[17px] leading-relaxed dark:text-gray-100 w-[95%] text-justify">
        We offer a wide range of well-maintained vehicles, from economy cars to premium models, with easy booking, transparent pricing, and flexible rental options.
      </p>
      <p className="text-[17px] leading-relaxed dark:text-gray-100 w-[95%]">
        Our service is built around convenience, fast support, and a smooth customer experience from reservation to return.
      </p>
      <Button  name="contact" url="/contact"/>
    </div>

  </div>

</div>
  )
}

export default About