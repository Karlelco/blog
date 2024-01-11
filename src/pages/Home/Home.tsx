import Person from '../../components/person/Person'
import YourComponent from '../Blogs/Blogs'



function Home() {
   
  return (
      <section className='hero h-full flex  flex-col-reverse lg:flex-row md:flex-row w-full items-center  bg-base-200 border-0'>
          <div className=' hero-content flex-col lg:flex-row'>
              <div>
                  <Person />
              </div>
              <div className=' flex-col w-full justify-between'>
                  <div className="carousel  w-full">
                      <div id="item1" className="carousel-item w-full">
                          <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                      </div>
                      <div id="item2" className="carousel-item w-full">
                          <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                      </div>
                      <div id="item3" className="carousel-item w-full">
                          <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                      </div>
                      <div id="item4" className="carousel-item w-full">
                          <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                      </div>
                  </div>
                  <div className="flex justify-center w-full py-2 gap-2">
                      <a href="#item1" className="btn btn-xs">1</a>
                      <a href="#item2" className="btn btn-xs">2</a>
                      <a href="#item3" className="btn btn-xs">3</a>
                      <a href="#item4" className="btn btn-xs">4</a>
                  </div>
                  <div className='justify-center text-center  items-center'>
                      <div className="divider divider-neutral">
                          <button className='btn '>... Blogs... </button>
                         
                      </div>
                  </div>

                  <div>
                   
                  </div>
                  <div>
                      <YourComponent/>
                      {/* <App /> */}
                      <button className='btn'>
                          More .....
                      </button>
                  </div>
              </div>
              
          </div>
          
   </section>
  )
}

export default Home