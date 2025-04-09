import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { hotliners } from '../data/sampleData'

const categories = [
  { name: 'Featured', subcategories: [] },
  { name: 'Nails', subcategories: ['Manicure', 'Pedicure', 'Nail Art'] },
  { name: 'Hair', subcategories: ['Cut', 'Color', 'Styling'] },
  { name: 'Eyebrows/Lashes', subcategories: ['Eyebrow Shaping', 'Lash Extensions'] },
  { name: 'Hair Removal', subcategories: ['Waxing', 'Threading'] },
  { name: 'Makeup', subcategories: ['Bridal', 'Event', 'Makeup Lessons'] },
  { name: 'Piercings', subcategories: ['Ears', 'Nose', 'Body'] },
  { name: 'Tattoos', subcategories: ['Custom', 'Flash'] },
  { name: 'Braiding', subcategories: ['Box Braids', 'Cornrows'] },
  { name: 'Clothing', subcategories: [] },
]

const Explore = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState(
    location.state?.category || 'Featured'
  )
  const [searchQuery, setSearchQuery] = useState(
    location.state?.searchQuery || ''
  )
  const [showFilters, setShowFilters] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  
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
            placeholder="Search services or members..."
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

      {/* Categories Horizontal Scroll */}
      <div className="relative mb-8">
        <div className="flex overflow-x-auto space-x-4 pb-2">
          {categories.map((category) => (
            <div key={category.name} className="relative">
              <button
                onClick={() => {
                  setSelectedCategory(category.name);
                  setExpandedCategory(expandedCategory === category.name ? null : category.name);
                }}
                className={`px-4 py-2 rounded-none whitespace-nowrap cursor-pointer transition-all duration-200 ${
                  selectedCategory === category.name
                    ? 'bg-black text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>

              {/* Subcategory Dropdown */}
              {expandedCategory === category.name && category.subcategories.length > 0 && (
                <div className="absolute left-0 top-full mt-2 z-10 bg-white border rounded-none shadow-md min-w-[12rem] w-max whitespace-nowrap">
                  {category.subcategories.map((subcategory) => (
                    <button
                      key={subcategory}
                      onClick={() => {
                        setSelectedCategory(subcategory);
                        setExpandedCategory(null);
                      }}
                      className={`block w-full text-left px-4 py-2 cursor-pointer transition hover:bg-gray-100 ${
                        selectedCategory === subcategory ? 'bg-gray-200' : ''
                      }`}
                    >
                      {subcategory}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
              <div 
                className="aspect-square cursor-pointer" 
                onClick={() => navigate(`/seller/${hotliner.id}`)}
              >
                <img
                  src={hotliner.imageUrl}
                  alt={hotliner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg cursor-pointer" onClick={() => navigate(`/seller/${hotliner.id}`)}>
                  {hotliner.name}
                </h3>
                <p className="text-gray-600 text-sm">{hotliner.category}</p>
                <div className="flex items-center gap-1 mt-1">
                  <FontAwesomeIcon icon={farStar} className="text-yellow-400" />
                  <span className="text-sm">{hotliner.rating}</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">{hotliner.location}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-semibold">${hotliner.price}</span>
                  <button 
                    onClick={() => navigate(`/seller/${hotliner.id}`)}
                    className="px-4 py-2 bg-gray-200 text-black rounded-none hover:bg-gray-300 cursor-pointer"
                  >
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