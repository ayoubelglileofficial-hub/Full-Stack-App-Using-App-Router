import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

import { items } from './dataP'

const portfolio = () => {


  return (
    <div className="min-h-screen font-sans">
      <div className=''>

        {/* overlay text */}
        <div className="w-fit max-w-[90%] mx-6 my-2 px-6 py-2 text-black/50  dark:border-slate-800  dark:text-slate-400">
          <h1 className="text-6xl font-bold whitespace-nowrap">
            Our Work
          </h1>
        </div>
        {/* Grid */}
        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {items.map((item) => (
            <div
              key={item.id}
              className="group hover:shadow-xl transition w-full flex flex-row-reverse max-w-2xl rounded-xl overflow-hidden shadow-xl border border-black/10 dark:border-white/10"
            >


              <div className="relative w-full h-[300px] overflow-hidden">
                <Link href={item.url}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-400 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </Link>

                <div className="absolute px-8 py-2 bottom-0 flex flex-col items-start  justify-center text-white bg-black/40">
                  <h2 className="text-lg font-semibold text-blue-900/80 group-hover:text-white ">{item.title}</h2>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Content */}


    </div>
  )
}

export default portfolio