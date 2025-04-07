import React, { useState, useRef } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase'

interface NewServiceProps {
  serviceType: string
}

const NewService: React.FC<NewServiceProps> = ({ serviceType }) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Optional: store provider name if needed for each listing
  const [providerName, setProviderName] = useState<string>('')

  const [serviceTitle, setServiceTitle] = useState<string>('')
  const [about, setAbout] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [location, setLocation] = useState<string>('')

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setSelectedImages((prev) => [...prev, e.target!.result as string])
        }
      }
      reader.readAsDataURL(file)
    })
  }

  const removeImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handlePost = async () => {
    const listingRef = collection(db, 'listings')
    await addDoc(listingRef, {
      providerName,
      serviceTitle,
      about,
      price,
      location,
      images: selectedImages,
      timestamp: new Date().toISOString(),
      serviceType
    })
    // Optionally reset fields or show a success message
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Service: {serviceType}
      </h1>

      {/* Image Upload Section */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Upload images for {serviceType} (work samples, profile, etc.)
        </label>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center w-full h-32 
                       border-2 border-gray-300 border-dashed rounded-lg cursor-pointer 
                       bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
            <input
              id="image-upload"
              type="file"
              className="hidden"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
            />
          </label>
        </div>
      </div>

      {/* Image Preview Section */}
      {selectedImages.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {selectedImages.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                alt={`Preview ${index + 1}`}
                className="w-full h-40 object-cover rounded-lg"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full 
                           opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Optional: If you want to store the provider's name for each service listing */}
      <div>Provider Name (optional)</div>
      <input
        type="text"
        value={providerName}
        onChange={(e) => setProviderName(e.target.value)}
        placeholder="e.g. Jane Doe"
        className="w-full px-3 py-3 border border-gray-300 placeholder-gray-500 
                   text-gray-900 focus:outline-none focus:ring-black focus:border-black bg-gray-50 my-3"
      />

      <div>Service Title</div>
      <input
        type="text"
        value={serviceTitle}
        onChange={(e) => setServiceTitle(e.target.value)}
        placeholder="e.g. 'Professional Makeup for Events'"
        className="w-full px-3 py-3 border border-gray-300 placeholder-gray-500 
                   text-gray-900 focus:outline-none focus:ring-black focus:border-black bg-gray-50 my-3"
      />

      <div>About (Description)</div>
      <textarea
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        placeholder="Insert example description (e.g. 'I have 5 years of experience...')"
        className="w-full px-3 py-3 border border-gray-300 placeholder-gray-500 
                   text-gray-900 focus:outline-none focus:ring-black focus:border-black bg-gray-50 my-3"
      />

      <div>Price</div>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="e.g. $50"
        className="w-full px-3 py-3 border border-gray-300 placeholder-gray-500 
                   text-gray-900 focus:outline-none focus:ring-black focus:border-black bg-gray-50 my-3"
      />

      <div>Location</div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter listing location, e.g. 'NYC'"
        className="w-full px-3 py-3 border border-gray-300 placeholder-gray-500 
                   text-gray-900 focus:outline-none focus:ring-black focus:border-black bg-gray-50 my-3"
      />

      <button
        onClick={handlePost}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Post
      </button>
    </div>
  )
}

export default NewService
