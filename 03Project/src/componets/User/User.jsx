import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} =useParams()
  return (
    <div className='text-center bg-slate-300 h-screen flex justify-center items-center'>
        <h1 className='text-6xl'>
        User:{userid}
        </h1>
    </div>
  )
}

export default User
    