import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ListingCard from '../components/ListingCard'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'

const listings = () => {
  const [listings, setListings] = useState<any[]>([]);

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, 'listings');
      const snapshot = await getDocs(listingsRef);
      const listingsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setListings(listingsList);
    }
    fetchListings();
  }, []);
  return (
    <div>
      <Header />
      <div className='text-2xl font-bold max-w-6xl mx-auto px-10 my-10'>Listings</div>
      <div className='px-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {listings.map((listing) => (
            <ListingCard 
              key={listing.id} 
              title={listing.data.title} 
              price={listing.data.price} 
              imageUrl="https://images.squarespace-cdn.com/content/v1/587553a42e69cf0d97bd789e/1647533205556-2LW64ZRGF1A1FC1BWDQL/image-asset.jpeg?format=750w" 
              isNew={listing.data.isNew} 
              location={listing.data.location} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default listings