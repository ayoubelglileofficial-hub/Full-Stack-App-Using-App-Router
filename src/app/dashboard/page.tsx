'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import useSWR from 'swr'
import Loading from './loading'

const fetcher = (...args: [string]) => fetch(...args).then(res => res.json())

const Dashboard = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  // Handle redirect in useEffect to avoid render-phase side effects
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/dashboard/login')
    }
  }, [status, router])

  // Loading state
  if (status === 'loading') {
    return (
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Loading/>
        Loading...
      </div>
    )
  }

  // Don't render anything while redirecting (or if unauthenticated)
  if (status === 'unauthenticated') {
    return (
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        
        <Loading/>Redirecting to login...
      </div>
    )
  }

  // Now safe to call hooks (session is authenticated)
  const { data, error, isLoading } = useSWR(
    'http://localhost:3000/api/user', 
    fetcher
  )

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black text-red-500">
        Error loading data
      </div>
    )
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Dashboard</h1>
      {/* Render your portfolioItems data here */}
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  )
}

export default Dashboard