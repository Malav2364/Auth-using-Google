"use client"
import SocLg from './scLgn'
import React, { useState } from 'react'
import { doCredLogin } from '@/app/actions'
import { useRouter } from 'next/navigation'


function form() {
  const [error, setError] = useState("")
  const router = useRouter()
  async function handleSubmit(event){
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget)
      const response = await doCredLogin(formData);

      if(!!response.error){
        setError(response.error.message)
      }else{
        router.push('/home')
      }

    } catch (error) {
      console.error(error)
      setError("Check your Credentials")
    }
  }
  return (
  <>
  <div className='text-red-500 text-xl'>{error}</div>
  <form className='flex flex-col items-center justify-center my-3 border p-3 border-green-500 rounded-md'
    onSubmit={handleSubmit}
  >
    <div className='my-2'>
      <label htmlFor="email">Email Address</label>
      <input type="email" className='border mx-2 border-gray-500 rounded' name='email' id='email' />
    </div>
    <div className='my-2'>
      <label htmlFor="password">Password</label>
      <input type="password" className='border mx-2 border-gray-500 rounded' name='password' id='password' />
    </div>
    <button className='bg-orange-500 mt-4 rounded-xl flex justify-center items-center w-36 text-white' type='submit'>Credential Login</button>
  </form>
    <SocLg/>
  </>
  )
}

export default form