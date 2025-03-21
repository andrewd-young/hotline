import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import Header from '../components/Header'

interface ListingData {
  title: string
  description: string
  location: string
  hostName: string
  price: number
  imageUrl: string
}

const Listing = () => {
  const { id } = useParams()
  const [listing, setListing] = useState<ListingData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchListing = async () => {
      if (!id) return
      
      try {
        const listingRef = doc(db, 'listings', id)
        const listingDoc = await getDoc(listingRef)
        
        if (listingDoc.exists()) {
          setListing(listingDoc.data() as ListingData)
        }
      } catch (error) {
        console.error('Error fetching listing:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchListing()
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!listing) {
    return <div>Listing not found</div>
  }

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image */}
          <div className="relative h-96 w-full">
            <img
              src={listing.imageUrl}
              alt={listing.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Title and Price */}
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{listing.title}</h1>
              <div className="text-2xl font-bold text-green-600">
                ${listing.price}
              </div>
            </div>

            {/* Host and Location */}
            <div className="flex items-center gap-4 text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Hosted by {listing.hostName}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{listing.location}</span>
              </div>
            </div>

            {/* Description */}
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mb-2">About this service</h2>
              <p className="text-gray-600">{listing.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing 