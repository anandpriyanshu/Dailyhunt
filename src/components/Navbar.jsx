import React from 'react'

const Navbar = ({ setcategory }) => {
    return (
        <>

            <nav>

                <div className='p-4 mx-8 flex justify-between items-center'>
                    <h1 className='text-2xl text-gray-700 hover:text-gray-950 font-bold mr-10 cursor-pointer' onClick={() => setcategory("general")}>DailyHunt </h1>


                    <div className='space-x-3 flex'>
                        <a href='#' className="font-bold  text-sm transition-all duration-500 hover:text-base" onClick={() => setcategory("technology")}>Technology</a>
                        <a href='#' className="font-bold  text-sm transition-all duration-500 hover:text-base" onClick={() => setcategory("business")}>Business</a>
                        <a href='#' className="font-bold  text-sm transition-all duration-500 hover:text-base" onClick={() => setcategory("health")}>Health</a>
                        <a href='#' className="font-bold  text-sm transition-all duration-500 hover:text-base" onClick={() => setcategory("science")}>Science</a>
                        <a href='#' className="font-bold  text-sm transition-all duration-500 hover:text-base" onClick={() => setcategory("sports")}>Sports</a>
                    </div>
                </div>
            </nav >

        </>
    )
}

export default Navbar