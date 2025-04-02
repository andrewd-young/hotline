import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import OpeningImage from '../assets/images/3.jpeg'

const Hero = () => {
  return (
    <Link to="/search" className="block">
      <section className="h-screen relative group transition-all duration-300">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={OpeningImage}
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full">
          <div className="h-full flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-sans text-white text-7xl md:text-9xl font-extrabold tracking-wider">
                GLOW UP TODAY
              </h1>
            </motion.div>
          </div>
        </div>
      </section>
    </Link>
  )
}

export default Hero 