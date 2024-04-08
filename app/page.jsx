import React from 'react'
import Link from 'next/link'

const Homepage = () => {
    return (
        <div>
            <h1 className="text-3xl">Welcome</h1>
            <Link href="/properties" className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-2'>Show Properties</Link>
        </div>
    )
}

export default Homepage