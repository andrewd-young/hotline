import { Link } from 'react-router'

const Header = () => {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10 ">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold ">
              Hotline
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-8">
            <Link to="/post" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Post
            </Link>
            <Link to="/listings" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Find Services
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header