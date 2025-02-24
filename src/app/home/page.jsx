import React from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Logout from '@/components/logout'

const HomePage =async  () => {
    const session = await auth()
    if (!session?.user) redirect("/");
  return (
    <div className='flex flex-row gap-3 p-4 justify-between border-solid'>
        {
            session?.user?.image && session?.user?.name ?  (
                <>
                    <div className='flex flex-row items-center'>
                        <h1>Welcome Back, {session?.user.name}</h1>
                    </div>
                    <div className='flex flex-row gap-3 items-center'>
                        <Image
                        className='rounded-full size-10'
                            src={session?.user.image}
                            alt={session?.user.name}
                            width={50}
                            height={50}
                        /> 
                        <Logout/>
                    </div>
                </>
            ) : (
                <div className='flex flex-row items-center'>
                        <h1>Welcome Back, {session?.user.email}</h1>
                </div>
            )
        }
        <Logout/>
    </div>
  )
}

export default HomePage
