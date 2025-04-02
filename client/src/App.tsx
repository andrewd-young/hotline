import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Post from './pages/Post.tsx'
import Offering from './pages/Offering.tsx'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Explore from './pages/Explore.tsx'
import Search from './pages/Search'
import Hero from './components/Hero'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

const App = () => {
  // Dummy data from Explore page - this should eventually come from your backend
  const hotliners = [
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
  ]

  return (
    <div className="min-h-screen bg-[#D7DOC4]">
      <Routes>
        <Route path="/" element={
          <>
            <Header isTransparent={true} />
            <div className="flex flex-col">
              <Hero />

              {/* Mission Statement Section */}
              <section className="bg-white py-24">
                <div className="max-w-[1400px] mx-auto px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h2 className="text-4xl md:text-5xl font-light">
                      The ultimate celebration of<br />art and girlhood
                    </h2>
                  </motion.div>
                </div>
              </section>

              {/* Featured Hotliners Section */}
              <section className="bg-white pb-24">
                <div className="max-w-[1400px] mx-auto px-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Hotliners</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {hotliners.map((hotliner) => (
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
              </section>
            </div>
          </>
        } />
        <Route path="/post" element={
          <>
            <Header />
            <div className="pt-20">
              <Post />
            </div>
          </>
        } />
        <Route path="/offering/:id" element={
          <>
            <Header />
            <div className="pt-20">
              <Offering />
            </div>
          </>
        } />
        <Route path="/login" element={
          <>
            <Header />
            <Login />
          </>
        } />
        <Route path="/signup" element={
          <>
            <Header />
            <Signup />
          </>
        } />
        <Route path="/explore" element={
          <>
            <Header />
            <div className="pt-20">
              <Explore />
            </div>
          </>
        } />
        <Route path="/search" element={
          <Search />
        } />
      </Routes>
    </div>
  )
}

export default App