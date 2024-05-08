import React from 'react'

const Navbar = () => {
    return (
        <>

            <nav>

                <div className='p-4 mx-8 flex justify-between items-center'>
                    <h1 className='text-2xl text-gray-700 hover:text-gray-950 font-bold mr-10 cursor-pointer'>DailyHunt </h1>


                    <div className='space-x-3'>
                        <a href='#' className='text-gray-900 px-4 py-1 rounded border-2 border-gray-800 transition duration-950 hover:border-gray-400 hover:text-gray-500'>Login</a>
                        <a href='#' className='text-gray-900 rounded border-2 px-4 py-1 border-gray-600 transition duration-950 hover:border-gray-400 hover:text-gray-500 '>Create Account</a>
                    </div>
                </div>
            </nav >

        </>
    )
}

export default Navbar