import React from 'react'
import Image from 'next/image'

const Element = () => {
  return (
    <div className="border-blue-700 border-[2px] p-4 rounded-lg flex justify-center my-8 items-center flex-col w-64 mx-4"> 
    <Image src="https://img.freepik.com/premium-vector/2fa-authentication-password-secure-notice-login-verification-sms-with-push-code-message-shield-icon-smartphone-phone-laptop-computer-pc-flat_212005-139.jpg" alt="home" width={500} height={500} className="flex items-center justify-center rounded-lg" />
   <p className="mt-2 items-center mx-4 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime dolore consequatur!</p>
   </div>
  )
}

export default Element