import Header from '../components/Header'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'

interface OfferingData {
  hostName: string
  title: string
  about: string
  price: string
  location: string
  timestamp: string
}

const Offering = () => {
  const { id } = useParams()
  const [offering, setOffering] = useState<OfferingData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOffering = async () => {
      if (!id) return
      
      try {
        const offeringRef = doc(db, 'listings', id)
        const offeringSnap = await getDoc(offeringRef)
        
        if (offeringSnap.exists()) {
          setOffering(offeringSnap.data() as OfferingData)
        } else {
          console.log("No such document!")
        }
      } catch (error) {
        console.error("Error fetching document:", error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchOffering()
  }, [id])

  if (loading) {
    return (
      <div>
        <Header />
        <div className="max-w-4xl mx-auto p-6">
          <div>Loading...</div>
        </div>
      </div>
    )
  }

  if (!offering) {
    return (
      <div>
        <Header />
        <div className="max-w-4xl mx-auto p-6">
          <div>Listing not found</div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        {/* Title Section */}
        <h1 className="text-3xl font-bold mb-2">{offering.title}</h1>
        <p className="text-gray-600 mb-6">{offering.location}</p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="md:col-span-2">
            <div className="aspect-video bg-gray-200 mb-4">
              {/* Placeholder for future image implementation */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <img src="https://images.squarespace-cdn.com/content/v1/587553a42e69cf0d97bd789e/1647533205556-2LW64ZRGF1A1FC1BWDQL/image-asset.jpeg?format=750w" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            <div className="p-4 border rounded-lg">
              <div className="text-2xl font-bold mb-2">${offering.price}</div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Book Now
              </button>
            </div>

            <div className="border rounded-lg p-4">
              <h2 className="font-bold text-lg mb-2">Host Information</h2>
              <p>Hosted by {offering.hostName}</p>
              <p className="text-sm text-gray-600">
                Listed on {new Date(offering.timestamp).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">About this listing</h2>
          <p className="whitespace-pre-wrap">{offering.about}</p>
        </div>
      </div>
    </div>
  )
}

export default Offering