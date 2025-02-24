import React from 'react'
import { socialLogin } from '@/app/actions'

const sL = () => {
  return (
        <div>
        <form action={socialLogin}>
            <button className='bg-pink-400 p-3 text-white text-lg rounded-xl' type="submit" value="google" name="action">
                Sign in with google
            </button>
        </form>
    </div>
  )
}

export default sL
