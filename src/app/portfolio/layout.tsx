import React from 'react'
import NotFound from '../not-found'
import { items } from './dataP'
import { Metadata } from 'next'
// import { getPortfolioData } from './[category]/page';


// export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
//   const { category } = await params;
//   const post = await getPortfolioData(category);

//   if (!post || !post.title) {
//     return { title: "Portfolio" };
//   }

//   return {
//     title: post.title,
//     description: post.shortDesc,
//   };
// }

export const metadata: Metadata = {
  title: 'FSA - Portfolio',
  description: 'Portfolio Page',
}


const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export default Layout