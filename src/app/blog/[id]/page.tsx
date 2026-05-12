import Link from "next/link";
import React from "react";
// import blogItems from '../../../../db.json'
import NotFound from "@/app/not-found";
import Image from "next/image";
import type { Metadata } from "next";


async function getblogData(id: string) {
  try {
    const res = await fetch(`http://localhost:3001/blogItems/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      // throw new Error(`API error: ${res.status} ${res.statusText}`);
    return <NotFound />;

    }

    return await res.json();
  } catch (error) {
    console.error("Data fetch failed:", error);
    return null;
  }
}


async function getAllItems() {
  const res = await fetch(`http://localhost:3001/blogItems?trend=true`, {
    next: { revalidate: 60 },
  });
  return res.ok ? res.json() : [];
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const data = await getblogData(id);

  if (!data || data?.props?.statusCode === 404) {
    return {
      title: "Post Not Found",
      description: "This blog post could not be found.",
    };
  }

  return {
    title: `${data.title} | Blog`,
    description: data.shortDesc,
    openGraph: {
      title: data.title,
      description: data.shortDesc,
      images: data.img ? [{ url: data.img, alt: data.title }] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.shortDesc,
      images: data.img ? [data.img] : [],
    },
  };
}



const BlogPost = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  // const data = await getblogData(id);
  // const allTrending = await getblogData(id);

  const [data, allTrending] = await Promise.all([getblogData(id), getAllItems()]);

  if (!data) {
    return <NotFound />;
  }
  const trendingItems = allTrending.filter((i) => i.id !== Number(id));
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-[1400px] mx-auto px-4 py-10">
        <div className="flex gap-6">
          <main className="w-[70%] shrink-0">
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg mb-8">
              <Image
                src={data.img || "/placeholder.jpg"}
                alt={data.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
                  Featured Project
                </span>
                <h1 className="text-4xl font-extrabold text-white leading-tight drop-shadow">
                  {data.title}
                </h1>
              </div>
            </div>

            <p className="text-base text-zinc-500 dark:text-zinc-400 italic border-l-4 border-blue-500 pl-4 mb-8 leading-relaxed">
              {data.shortDesc}
            </p>

            <article className="space-y-6">
              {data.desc?.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-zinc-700 dark:text-zinc-300 text-[1.05rem] leading-[1.85] tracking-wide"
                >
                  {paragraph}
                </p>
              ))}
            </article>

            <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition"
              >
                ← Back to all posts
              </Link>
            </div>
          </main>

          <aside className="w-[25%] shrink-0">
            <div
              className="sticky top-6 h-auto flex flex-col gap-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <div className="pb-2 border-b border-zinc-200 dark:border-zinc-800">
                <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Trending
                </h2>
              </div>

              {trendingItems.length > 0 ? (
                trendingItems.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blog/${item.id}` || "#"}
                    className="group flex flex-col rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800       bg-white dark:bg-zinc-900       shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="relative w-full h-[130px]">
                      <Image
                        src={item.img || "/placeholder.jpg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-3">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1">
                        Trending
                      </span>
                      <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-100 leading-snug mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                        {item.shortDesc}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-xs text-zinc-400 dark:text-zinc-600 italic">
                  No trending posts right now.
                </p>
              )}

              <div className="mt-2 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 p-4 text-center">
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                  Sponsored
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Your ad could be here.
                </p>
              </div>
            </div>
          </aside>

          <div className="w-[5%] shrink-0" aria-hidden="true">
            <div className="sticky top-6 h-[calc(100vh-3rem)] flex justify-center">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
