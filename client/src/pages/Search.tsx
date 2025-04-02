import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons'
import lipsImage from '../assets/images/lips.png' // Importing the lips image


// Sample search suggestions - replace with actual data/API call
const searchSuggestions = [
  { query: "gel x nails", category: "Nails" },
  { query: "smokey eye makeup", category: "Makeup" },
  { query: "denim alterations", category: "Clothing" },
  { query: "braided updo", category: "Hair" },
  { query: "acrylic full set", category: "Nails" },
  { query: "eyelash extensions", category: "Eyebrows/Lashes" }
]

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState(searchSuggestions)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const navigate = useNavigate()

  const handleSearch = (query: string, category?: string) => {
    // Navigate to explore page with the selected category
    navigate(`/explore`, { state: { category, searchQuery: query } })
  }

  const filterSuggestions = (input: string) => {
    setSearchQuery(input)
    const filtered = searchSuggestions.filter(suggestion =>
      suggestion.query.toLowerCase().includes(input.toLowerCase())
    )
    setSuggestions(filtered)
  }

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag])
    }
    setSearchQuery('')
  }

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove))
  }

  const handleSearchInput = () => {
    if (searchQuery) {
      handleSearch(searchQuery);
    }
  }

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0" style={{ backgroundImage: `url(${lipsImage})`, backgroundSize: 'cover', backgroundColor: '#D7D0C4' }}>
        {/* Add a placeholder image or your lips image here */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        {/* Search Container */}
        <div className="h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl"
          >
            <h1 className="text-white text-4xl md:text-5xl font-light text-center mb-8">
              Find Your Glow. Book Your Hotline Today.
            </h1>

            {/* Fixed position container for search box */}
            <div className="relative">
              {/* Search Box Container */}
              <div className="bg-white/90 backdrop-blur-sm rounded-none">
                {/* Search Input Row */}
                <div className="flex items-center border-b border-gray-200">
                  <button 
                    onClick={() => navigate(-1)}
                    className="px-4 py-4 hover:text-gray-600 transition-colors"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                  <div className="flex-1 flex items-center gap-2 px-2">
                    {/* Tags */}
                    {selectedTags.map((tag, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-1 bg-gray-200 px-2 py-1 text-sm"
                      >
                        <span>{tag}</span>
                        <button
                          onClick={() => removeTag(tag)}
                          className="hover:text-gray-600"
                        >
                          <FontAwesomeIcon icon={faTimes} className="text-xs" />
                        </button>
                      </div>
                    ))}
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => filterSuggestions(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearchInput()}
                      placeholder="Find Your Service"
                      className="flex-1 py-4 focus:outline-none bg-transparent"
                    />
                  </div>
                  <button onClick={handleSearchInput} className="px-4 py-4 text-black hover:text-gray-600 cursor-pointer">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>

              {/* Absolute positioned suggestions */}
              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute w-full bg-white/90 backdrop-blur-sm shadow-lg"
                >
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        addTag(suggestion.query)
                        handleSearch(suggestion.query, suggestion.category)
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-gray-200 cursor-pointer flex justify-between items-center"
                    >
                      <span className="text-gray-800">{suggestion.query}</span>
                      <span className="text-sm text-gray-400 ml-2">{suggestion.category}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Search 