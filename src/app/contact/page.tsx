import Button from '@/components/button';
import ContactForm from '@/components/ContaxtForm';
import Image from 'next/image';
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FSA - ContactUs ',
  description: '.FSA - ContactUs Page',
}

const Contact = async () => {
    await new Promise((res) => setTimeout(res, 1000)); // simulate delay

  return (
    <div className="h-[79vh]  mx-auto flex flex-col items-center justify-start   font-sans ">
      
      {/* banner */}
      <div className="relative w-[90%] h-88">
    
        {/* overlay text */}
        <div className="absolute px-8 py-2 bottom-20 flex flex-col items-start  justify-center text-white bg-black/40">
          <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>
    
      </div>
    
      {/* content */}
<div className="w-[90%] mx-auto flex flex-col md:flex-row gap-6 items-center justify-between text-black dark:text-white pt-10">
  
  {/* Image */}
  <div className="w-full md:w-1/2">
    <Image
      src="/contactus.png"   // put image inside /public
      alt="Contact Us"
      width={600}
      height={500}
      className="w-full h-[400px] object-cover rounded-xl floatY "
    />
  </div>

  {/* Form */}
  <div className="w-full md:w-1/2">
    <ContactForm />
  </div>

</div>
    
    </div>
  )
}

export default Contact