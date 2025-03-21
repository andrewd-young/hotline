import OpeningImage from './components/OpeningImage'
import ListingCard from './components/ListingCard'
import Header from './components/Header'
import im2 from './assets/images/1.jpg'
import { Routes, Route } from 'react-router-dom'
import Post from './pages/Post.tsx'
import Offering from './pages/Offering.tsx'
import Listings from './pages/Listings.tsx'
import useListings from './hooks/useListings'

const App = () => {
  const { recentListings, loading } = useListings()

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <OpeningImage />
            {/* recently listed */}
            <div className='my-10'>
              <div className='text-2xl font-bold mx-10 my-10'>Recently Listed</div>
              <div className='mx-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                  {loading ? (
                    <div>Loading...</div>
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
            {/* <ListingCard
              title="Georgia Gingham Short Sleeve Mini Dress"
              price="239"
              imageUrl="https://images.squarespace-cdn.com/content/v1/587553a42e69cf0d97bd789e/1647533205556-2LW64ZRGF1A1FC1BWDQL/image-asset.jpeg?format=750w"
              isNew={true} location={'New York'} />
            <ListingCard
              title="Nail services by Mira"
              price="239"
              imageUrl="https://images.squarespace-cdn.com/content/v1/587553a42e69cf0d97bd789e/1647533205556-2LW64ZRGF1A1FC1BWDQL/image-asset.jpeg?format=750w"
              isNew={true} location={'New York'} />
            <ListingCard
              title=""
              price="239"
              imageUrl="https://images.squarespace-cdn.com/content/v1/587553a42e69cf0d97bd789e/1647533205556-2LW64ZRGF1A1FC1BWDQL/image-asset.jpeg?format=750w"
              isNew={true} location={'New York'} />
            <ListingCard
              title="Georgia Gingham Short Sleeve Mini Dress"
              price="239"
              imageUrl="https://images.squarespace-cdn.com/content/v1/587553a42e69cf0d97bd789e/1647533205556-2LW64ZRGF1A1FC1BWDQL/image-asset.jpeg?format=750w"
              isNew={true} location={'New York'} /> */}

            {/* offering */}
            <div>
              <div className='text-2xl font-bold mx-10'>How it works</div>
              <div className='mx-10 my-5'>Whether you're looking to earn from your space or find your next stay, we've made the process simple.</div>
              <div className='mx-10 flex'>
                <div className='flex-1'>
                  <div>
                    <div>1. Find a service</div>
                    <div>2. Book instantly</div>
                    <div>3. Enjoy</div>
                  </div>
                </div>
                <div className='flex-1'>
                  <img src={im2} alt="" />
                </div>
              </div>
            </div>

            <div className='h-[100px]'>

            </div>
          </>
        } />
        <Route path="/listings" element={<Listings />} />
        <Route path="/post" element={<Post />} />
        <Route path="/offering/:id" element={<Offering />} />
      </Routes>
    </div>
  )
}

export default App