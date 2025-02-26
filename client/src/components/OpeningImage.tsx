import React from 'react'
import logo from '../assets/images/3.jpg'
import { motion } from 'framer-motion'

const OpeningImage = () => {
  return (
    <div>
      {/* banner */}
      
      {/* Your OpeningImage content will go here */}
      <div
        className="overflow-hidden relative"
        style={{ borderRadius: "inherit" }}
      >
        <div className='absolute top-0 left-0 w-full z-10 h-5 bg-white '>
        </div>
        <div className='w-full md:h-[700px] h-[500px] relative'>
          <motion.img
            src={logo}
            alt="Hotline"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default OpeningImage