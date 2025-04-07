import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

interface HeaderProps {
  isTransparent?: boolean
}

const Header = ({ isTransparent = false }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

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
              className={`text-2xl font-light transition-colors ${textColor} cursor-pointer`}
            >
              HOTLINE
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-8">
            <Link 
              to="/" 
              className={`font-light hover:opacity-75 transition-all ${textColor} cursor-pointer`}
            >
              Home
            </Link>
            <Link 
              to="/explore" 
              className={`font-light hover:opacity-75 transition-all ${textColor} cursor-pointer`}
            >
              Explore
            </Link>
            <Link 
              to="/signup" 
              className={`font-light hover:opacity-75 transition-all ${textColor} cursor-pointer`}
            >
              Become a Hotliner
            </Link>
            <Link 
              to="/login" 
              className={`font-light hover:opacity-75 transition-all ${textColor} cursor-pointer`}
            >
              Log in
            </Link>
            {isLoggedIn && (
              <Link 
                to={`/customer/${1}`}
                className={`font-light hover:opacity-75 transition-all ${textColor} cursor-pointer`}
              >
                <FontAwesomeIcon icon={faUserCircle} className="text-2xl" />
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header