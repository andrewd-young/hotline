import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface HeaderProps {
  isTransparent?: boolean
}

const Header = ({ isTransparent = false }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const bgColor = isTransparent 
    ? scrolled ? 'bg-white' : 'bg-transparent'
    : 'bg-white'

  const textColor = isTransparent
    ? scrolled ? 'text-black' : 'text-white'
    : 'text-black'

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${bgColor}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className={`text-2xl font-light transition-colors ${textColor}`}
            >
              HOTLINE
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-8">
            <Link 
              to="/" 
              className={`font-light hover:opacity-75 transition-all ${textColor}`}
            >
              Home
            </Link>
            <Link 
              to="/post" 
              className={`font-light hover:opacity-75 transition-all ${textColor}`}
            >
              Post
            </Link>
            <Link 
              to="/listings" 
              className={`font-light hover:opacity-75 transition-all ${textColor}`}
            >
              Browse Services
            </Link>
            <Link 
              to="/post" 
              className={`font-light hover:opacity-75 transition-all ${textColor}`}
            >
              Become a Hotliner
            </Link>
            <Link 
              to="/login" 
              className={`font-light hover:opacity-75 transition-all ${textColor}`}
            >
              Log in
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header