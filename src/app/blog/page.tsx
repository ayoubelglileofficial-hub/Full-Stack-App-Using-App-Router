import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NotFound from '../not-found';
// import blogItems from './dbBlog'

async function getData() {
  try {
    const res = await fetch("http://localhost:3001/blogItems", {
      // Revalidate every 60 seconds (ISR)
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      // throw new Error(`API error: ${res.status} ${res.statusText}`);
          return <NotFound />;
      
    }

    return await res.json();
  } catch (error) {
    console.error("Data fetch failed:", error);
    return null; // Return null so UI can handle gracefully
  }
}

const Blog = async () => {
    const data = await getData();
      if (!data) {
    return <NotFound />;

  }
  return (
    <div className="w-[90%] mx-auto">

      {/* First item alone */}
      <div className="mb-10 w-[90%] mx-auto">
        {data.map((item, index) =>
          index === 0 ? (
            <div
              key={item.id}
              className="w-full flex flex-col lg:flex-row-reverse rounded-xl overflow-hidden shadow-xl border border-black/10 dark:border-white/10"
            >
              {/* Image */}
              <div className="relative w-full h-[400px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-6 bg-white dark:bg-zinc-900">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h1>

                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                  Detailed information about the <strong>{item.title}</strong> service.
                </p>

                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                  {item.desc?.[0] || item.shortDesc}
                </p>

                <Link
                  href={`/blog/${item.id}`|| "#"}
                  className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Blog Details
                </Link>
              </div>
            </div>
          ) : null
        )}
      </div>

      {/* Rest of items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto">
        {data.map((item, index) =>
          index !== 0 ? (
            <div
              key={item.id}
              className="w-full flex flex-col rounded-xl overflow-hidden shadow-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900"
            >
              {/* Image */}
              <div className="relative w-full h-[220px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {item.shortDesc}
                </p>

                <Link
                  href={`/blog/${item.id}`|| "#"}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
                >
                  Blog Details
                </Link>
              </div>
            </div>
          ) : null
        )}
      </div>

    </div>
  );
};



export default Blog