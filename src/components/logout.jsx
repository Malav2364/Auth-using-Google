"use client"

import React from 'react'
import {doLogout} from '../app/actions/index';
const logout = () => {
  return (
    <div>
      <form action={doLogout}>
        <button type='submit' className='bg-green-600 text-white my-2 p-2 rounded-full'>
            Logout
        </button>
      </form>
    </div>
  )
}

export default logout
