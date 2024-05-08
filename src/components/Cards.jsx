import React from 'react'

const Cards = ({ title, description, image, url }) => {
    return (
        <>
            <div className=' w-250px h-82 border-2 p-2 bg-gray-200 hover:cursor-pointer hover:bg-gray-300' >
                <img src={image ? image : "../images/download.jpg"} className='w-full h-44' alt='' />

                <div className='mt-3 h-100px'>
                    <h1 className='font-bold'>{title.slice(0, 50)}</h1>
                    <p className='line-clamp-2'>{description ? description : "Not available"}</p>
                </div>
                <a href={url} className='text-blue-600'>Read more...</a>




            </div>
        </>
    )
}

export default Cards