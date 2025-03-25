import { useEffect, useState } from 'react'
import ListingCard from '../components/ListingCard'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'

interface Listing {
  id: string;
  data: {
    title: string;
    price: number;
    isNew: boolean;
    location: string;
    timestamp: Date;
  }
}

const Listings = () => {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, 'listings');
      const snapshot = await getDocs(listingsRef);
      const listingsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: {
          title: doc.data().title as string,
          price: doc.data().price as number,
          isNew: doc.data().isNew as boolean,
          location: doc.data().location as string,
          timestamp: doc.data().timestamp as Date,
        }
      }));
      setListings(listingsList);
    }
    fetchListings();
  }, []);
  return (
    <div className="pt-8">
      <div className='text-2xl font-bold max-w-[1400px] mx-auto px-8 mb-8'>Listings</div>
      <div className='max-w-[1400px] mx-auto px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {listings.map((listing) => (
            <ListingCard 
              id={listing.id}
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

export default Listings