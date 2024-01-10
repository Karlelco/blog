import { motion, useScroll } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import {FaArrowRight, FaHome} from 'react-icons/fa'

import Blog from '../Blogs/Blog'

function Blogs() {
    const { scrollY } = useScroll()
  

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
    })
  return (
    
      
      <motion.div className="overflow-x-auto h-screen"
          initial={ { y: 500 } }
          animate={ { y: 0 } }
          transition={ { type: "spring", duration: 1.8 } }
      >
          
          <Blog />
          <button className="btn mt-10 bg-slate-200 dark:bg-slate-500 text-slate-800 dark:hover:text-white "> More Posts <FaArrowRight/> </button>
      </motion.div>
  )
}

export default Blogs