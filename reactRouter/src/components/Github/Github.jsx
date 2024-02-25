import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    //       one way to get github details
    // const [data, setData] = useState([])
    // useEffect(() => {
    //      fetch('https://api.github.com/users/Abhisheklodha01')
    //      .then((res) => res.json())
    //      .then((data) => {
    //            console.log(data);
    //            setData(data)
    //      })
    // }, [])

   const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white
    p-4 text-3xl font-bold'>Github followers: {data.followers}
    <img className='' src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

// second way to get github info
export const GithubInformation = async () => {
    const response = await fetch('https://api.github.com/users/Abhisheklodha01')
    return response.json()
}