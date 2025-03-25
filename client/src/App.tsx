import OpeningImage from './assets/images/3.jpeg'
import ListingCard from './components/ListingCard'
import Header from './components/Header'
import { Routes, Route, Link } from 'react-router-dom'
import Post from './pages/Post.tsx'
import Offering from './pages/Offering.tsx'
import Listings from './pages/Listings.tsx'
import useListings from './hooks/useListings'
import { motion } from 'framer-motion'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  const { recentListings, loading } = useListings()

  return (
    <div className="min-h-screen bg-[#f5f5f1]">
      <Routes>
        <Route path="/" element={
          <>
            <Header isTransparent={true} />
            <div className="flex flex-col">
              {/* Hero Section */}
              <section className="h-screen relative bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10" />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-white z-20"
                >
                  <Link 
                    to="/listings"
                    className="text-7xl md:text-9xl font-light mb-12 text-center hover:opacity-80 transition-opacity"
                  >
                    <button className="px-12 py-6 bg-white text-black text-5xl md:text-7xl hover:bg-gray-200 transition-colors cursor-pointer">
                      Glow Up Today
                    </button>
                  </Link>
                  <div className="flex flex-col items-center gap-8 mt-8">
                    <div className="text-center">
                      <h2 className="text-xl md:text-2xl font-light mb-4">
                        Want To Offer Your Beauty Services?
                      </h2>
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-lg md:text-xl">
                          <Link to="/signup" className="text-white/80 hover:text-white underline transition-colors">
                            Become a Hotliner
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div className="absolute inset-0 z-0">
                  <img 
                    src={OpeningImage}
                    alt="Hero" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </section>

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
                    <h2 className="text-4xl md:text-5xl font-light mb-8">
                      The ultimate celebration of<br />art and girlhood
                    </h2>
                  </motion.div>
                </div>
              </section>

              {/* Recently Listed Section */}
              <div className="max-w-[1400px] mx-auto px-8">
                <div className="w-full py-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Recently Listed</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                      <div className="col-span-full flex justify-center items-center py-12">
                        <div className="text-lg text-gray-600">Loading...</div>
                      </div>
                    ) : (
                      recentListings.map((listing) => (
                        <ListingCard
                          key={listing.id}
                          id={listing.id}
                          title={listing.data.title}
                          price={listing.data.price}
                          imageUrl={"https://images.squarespace-cdn.com/content/v1/587553a42e69cf0d97bd789e/1647533205556-2LW64ZRGF1A1FC1BWDQL/image-asset.jpeg?format=750w"}
                          isNew={listing.data.isNew}
                          location={listing.data.location}
                        />
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        } />
        <Route path="/listings" element={
          <>
            <Header />
            <div className="pt-20">
              <Listings />
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
      </Routes>
    </div>
  )
}

export default App