import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import OpeningImage from '../assets/images/3.jpeg'

const Hero = () => {
  return (
    <section className="h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={OpeningImage}
          alt="Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl text-center"
          >
            <Link to="/listings">
              <h1 className="font-sans text-white text-6xl md:text-8xl font-extrabold mb-8 hover:opacity-90 transition-opacity whitespace-nowrap">
                FIND YOUR GLOW
              </h1>
            </Link>
            
            <Link to="/signup">
              <p className="font-sans text-white text-3xl md:text-4xl font-medium hover:opacity-90 transition-colors">
                Become a Hotliner Today
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 