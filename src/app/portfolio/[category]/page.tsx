import Image from 'next/image'
import Link from 'next/link'
import {items, styleMap , iconMap} from '../dataP'
import { FaGithub, FaFigma, FaExternalLinkAlt } from "react-icons/fa"
import NotFound from '@/app/not-found'



const CategoryPage = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params

  const item = items.find((i) => i.url === `/portfolio/${category}`)

  if (!item) {
    return (
    <NotFound/>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black font-sans px-6 py-20">
      <div className="w-full flex flex-col lg:flex-row-reverse max-w-2xl rounded-xl overflow-hidden shadow-xl border border-black/10 dark:border-white/10">

        {/* Image */}
        <div className="relative w-full h-[400px]">
          <Image src={item.img} alt={item.title} fill className="object-cover" />
        </div>

        {/* Info */}
        <div className="p-6 bg-white dark:bg-zinc-900">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            {item.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            Detailed information about the <strong>{item.title}</strong> service.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{item.desc[0]}
          </p>
          <Link
            href={item.links[1]}
            className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            check the website
          </Link>
        </div>

      </div>
      <div className='gap-6 py-10 text-justify'>
        <p className='text-[22px] w-[90%] mx-auto '>{item.desc[1]}</p><br />
        <p className='text-[22px] w-[90%] mx-auto '>{item.desc[2]}</p>
      </div>





      <div className="w-full lg:w-[90%]  flex flex-col lg:flex-row  gap-10">
        <Image src={item.img} alt={item.title} width={500} height={800} className='rounded-md shadow-md'/>
        <div>
          <div className="flex lg:flex-col gap-3 ">
          {item.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-8 py-2 rounded-lg text-sm font-medium transition ${styleMap[l.icon]}`}
            >
              {iconMap[l.icon]}
              {l.label}
            </a>
          ))}
        </div>
        </div>

      </div>
    </div>
  )
}

export default CategoryPage