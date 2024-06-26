import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

import Newscontainer from './components/Newscontainer'

const App = () => {

  const [category, setcategory] = useState('general')


  // const [article, setarticle] = useState([])



  // const infinitescroll = () => {
  //   if (window.innerHeight + window.scrollY + 200 >= document.body.offsetHeight) {
  //     fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aea4baffd3b141d3ac1509aee3c47fdd")
  //       .then((res) => res.json()).then((data) => { setarticle([...article, ...data.articles]) })


  //   }
  // }

  // useEffect(() => {

  //   window.addEventListener("scroll", infinitescroll)
  //   return () => window.removeEventListener("scroll", infinitescroll)


  // }, [article])



  // useEffect(() => {
  //   fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aea4baffd3b141d3ac1509aee3c47fdd")
  //     .then((res) => res.json()).then((data) => { setarticle(data.articles) })


  // }, []);


  return (
    <>
      <Navbar setcategory={setcategory} />

      {/* <div className="flex flex-col items-center justify-center ">

        <div className='grid grid-cols-3 item-center gap-5'>

          {
            article.map((ele, i) => {
              return <Cards key={i} title={ele.title} description={ele.description} image={ele.urlToImage} url={ele.url} />
            })

          }
        </div>
      </div> */}
      <Newscontainer category={category} />



    </>
  )
}

export default App