import React from 'react'
import Person from '../../components/person/Person'
import Blogs from '../Blogs/Blogs'



function Home() {
   
  return (
      <section className='hero h-full flex  flex-col lg:flex-row md:flex-row w-full items-center  bg-base-200'>
          <div className=' hero-content flex-col lg:flex-row'>
              <Person />
              <div>
                  <div className='justify-center text-center items-center'>
                      <div className="divider divider-neutral">
                          <button className='btn '>... Blogs... </button>
                      </div>
                      
                  </div>
                  <Blogs />
              </div>
              
          </div>
          
   </section>
  )
}

export default Home