import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { useLocation } from 'react-router-dom'

interface HotlinerCard {
  id: string
  name: string
  category: string
  rating: number
  imageUrl: string
  location: string
  price: number
}

const categories = [
  'Featured', 'Nails', 'Hair', 'Eyebrows/Lashes', 
  'Hair Removal', 'Makeup', 'Piercings', 'Tattoos', 
  'Braiding', 'Clothing'
]

const Explore = () => {
  const location = useLocation()
  const [selectedCategory, setSelectedCategory] = useState(
    location.state?.category || 'Featured'
  )
  const [searchQuery, setSearchQuery] = useState(
    location.state?.searchQuery || ''
  )
  const [showFilters, setShowFilters] = useState(false)
  
  // Dummy data - replace with actual data from your backend
  const hotliners: HotlinerCard[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      category: 'Hair',
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1556229165-8aa0ceaa93a7?q=80&w=2687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Northeastern University',
      price: 45
    },
    {
      id: '2',
      name: 'Emily Davis',
      category: 'Nails',
      rating: 4.5,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1703343320234-4c1a75b3ff13?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Northeastern University',
      price: 30
    },
    // Add more dummy data as needed
  ]

  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category)
    }
    if (location.state?.searchQuery) {
      setSearchQuery(location.state.searchQuery)
    }
  }, [location.state])

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-8">
      {/* Search and Filter Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="relative flex-1 max-w-md">
          <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search services or providers..."
            className="w-full pl-10 pr-4 py-2 border rounded-none focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="ml-4 flex items-center gap-2 px-4 py-2 border rounded-none hover:bg-gray-50 cursor-pointer"
        >
          <FontAwesomeIcon icon={faFilter} />
          Filters
        </button>
      </div>

      {/* Categories */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-4 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-none whitespace-nowrap cursor-pointer ${
                selectedCategory === category
                  ? 'bg-gray-200 text-black'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Hotliner Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {hotliners
          .filter(hotliner => hotliner.category === selectedCategory || selectedCategory === 'Featured')
          .map((hotliner) => (
            <motion.div
              key={hotliner.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-none overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square">
                <img
                  src={hotliner.imageUrl}
                  alt={hotliner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{hotliner.name}</h3>
                <p className="text-gray-600 text-sm">{hotliner.category}</p>
                <div className="flex items-center gap-1 mt-1">
                  <FontAwesomeIcon icon={farStar} className="text-yellow-400" />
                  <span className="text-sm">{hotliner.rating}</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">{hotliner.location}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-semibold">${hotliner.price}</span>
                  <button className="px-4 py-2 bg-gray-200 text-black rounded-none hover:bg-gray-300 cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  )
}

export default Explore 