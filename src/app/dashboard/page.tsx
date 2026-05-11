'use client'
import React from 'react'
import useSWR from 'swr'

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(`http://localhost:3001/portfolioItems`, fetcher)
    console.log(data)

  return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
Dashboard</div>
  )
}

export default Dashboard