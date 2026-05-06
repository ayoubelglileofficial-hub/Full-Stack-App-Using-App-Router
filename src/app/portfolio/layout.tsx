import React from 'react'
import NotFound from '../not-found'
import { items } from './dataP'

const layout = ({children}) => {
    if (!items) {
      return (
      <NotFound/>
      )
    }
  return (
    <div>
        {children}
    </div>
  )
}

export default layout