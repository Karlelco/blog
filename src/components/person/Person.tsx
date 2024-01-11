import { motion } from "framer-motion"
import collo1  from '/collo1.jpg'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa"

function Person() {
    return (
        <motion.div
            initial={{ x: -300}}
            animate={ { x: 0 } }
            transition={ { type: "spring", duration: 1.8  } }
            className='lg:w-1/3 text-[16px] items-center justify-center w-full'>
            <div className='card card-bordered gap-4 w-fit lg:w-96 items-center justify-center dark:border-white px-10 py-4'>
                <div className="avatar online">
                    <div className="w-24 ring ring-primary ring-offset-base-100 ring-offset-2 rounded-full">
                        <img src={collo1} />
                    </div>

                </div>
                <div className="divider divider-neutral">About</div>
                <div >
                    <p>
                        ColloDev is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.
                    </p>
                </div>
                <div className="divider divider-neutral">Featured Posts:</div>
                <div className="space-y-2">
                    
                    <a href=''>
                        Overlaid the jeepers uselessly much excluding
                    </a>
                    <br/>
                    <a href=" ">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                    </a>
                </div>
                <div className="divider divider-neutral">Connect</div>
                
                {/* Social Media Icons */}
                <div className="flex justify-center gap-4 mt-4">
                    <a href="#" className="text-gray-500 hover:text-blue-500">
                       <FaFacebookSquare/>
                    </a>
                    <a href="#" className="text-gray-500 h-10 hover:text-blue-500">
                       <FaInstagramSquare />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-500">
                        <FaTwitter/>
                    </a>
                    <a href="" className="text-gray-500 hover:text-blue-500">
                        <FaLinkedinIn/>
                    </a>
                </div>
                {/* End of Social Media Icons */}
                
            </div>
        </motion.div>
    )
}

export default Person