import { useEffect, useState } from 'react';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../config/firebase';

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

const useListings = () => {
  const [recentListings, setRecentListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentListings = async () => {
      const querySnapshot = await getDocs(
        query(
          collection(db, 'listings'),
          orderBy('timestamp', 'desc'),
          limit(6)
        )
      );
      const listings = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data() as Listing['data'],
      }));
      setRecentListings(listings);
      setLoading(false);
    };
    fetchRecentListings();
  }, []);

  return { recentListings, loading };
};

export default useListings; 