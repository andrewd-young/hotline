import React, { useState } from 'react'
import OpeningImage from './components/OpeningImage'
import ListingCard from './components/ListingCard'
import Header from './components/Header'
import im2 from './assets/images/1.jpg'

const App = () => {

  const [customerOrVendor, setCustomerOrVendor] = useState<boolean>(false)

  return (
    <div>
      <Header />
      <OpeningImage />

      {/* recently listed */}
      <div className='my-10'>
        <div className='text-2xl font-bold mx-10 my-10'>Recently Listed</div>
        <div className='mx-10'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            <ListingCard
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
              isNew={true} location={'New York'} />
          </div>
        </div>
      </div>

      {/* offering */}
      <div>
        <div className='text-2xl font-bold mx-10'>How it works</div>
        <div className='mx-10 my-5'>Whether you're looking to earn from your space or find your next stay, we've made the process simple.</div>
        <div className='mx-10 flex'>
          <div className='flex-1'>
            <div>
              <div>1. Find a service</div>
              <div>2. Book instalty</div>
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
    </div>
  )
}

export default App