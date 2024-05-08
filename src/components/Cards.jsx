import React from 'react'

const Cards = ({ title, description, image, url, publish }) => {
    return (
        <>
            <div className=' w-250px h-88 border-2 p-2 bg-gray-200 hover:cursor-pointer hover:bg-gray-300' >
                <img src={image ? image : "../images/download.jpg"} className='w-full h-44' alt='' />

                <div className='mt-3 h-100px '>
                    <h1 className='font-bold'>{title.slice(0, 50)}</h1>
                    <p className='line-clamp-2 text-xs'>{description ? description : "Not available"}</p>
                    <p className='bg-red-300 w-3/5 text-xs mt-1 text-center font-bold '>{publish}</p>
                </div>
                <a href={url} className='text-blue-600 text-sm'>Read more...</a>




            </div>
        </>
    )
}

export default Cards