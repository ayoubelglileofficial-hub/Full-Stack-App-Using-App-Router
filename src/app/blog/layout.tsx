import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'FSA - Blog',
  description: 'Blog Page',
}

const layout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default layout