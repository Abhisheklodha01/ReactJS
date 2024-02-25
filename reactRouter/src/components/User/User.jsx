import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    // taking user id using useParams hook {name of varaible must be same in route and file}
    const {id} = useParams()
  return (
    <div className='text-center bg-gray-600
     text-white p-4  text-3xl font-bold'>
        User: {id}</div>
  )
}

export default User