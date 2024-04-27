import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 w-full mt-4 bg-blue-700 flex items-center font-semibold justify-center '> 
    <Link href={"https://www.linkedin.com/in/heyibad/"}>
    Follow on linkedIn
    
    </Link>
    </div>
  )
}

export default Footer