import React from 'react'

const Contact = async () => {
    await new Promise((res) => setTimeout(res, 4000)); // simulate delay

  return (
    <div className="h-screen flex flex-col flex-1 items-center justify-center bg-red-50 font-sans dark:bg-black">
      Contact</div>
  )
}

export default Contact