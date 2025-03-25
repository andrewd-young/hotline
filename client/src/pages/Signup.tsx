import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignup } from '../hooks/useSignup'

interface ServiceSkill {
  id: string
  name: string
}

const SERVICE_SKILLS: ServiceSkill[] = [
  { id: 'makeup', name: 'Makeup Artist' },
  { id: 'hair', name: 'Hair Styling' },
  { id: 'nails', name: 'Nail Art' },
  { id: 'skincare', name: 'Skincare' },
  // Add more services as needed
]

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    password: '',
    isServiceProvider: false,
    selectedSkills: [] as string[],
    bio: '',
    instagram: '',
    agreeToTerms: false
  })
  const [profileImage, setProfileImage] = useState<File | null>(null)
  const [workImages, setWorkImages] = useState<File[]>([])
  const [profileImagePreview, setProfileImagePreview] = useState('')
  const [workImagePreviews, setWorkImagePreviews] = useState<string[]>([])
  const { signup, loading, error } = useSignup()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSkillToggle = (skillId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedSkills: prev.selectedSkills.includes(skillId)
        ? prev.selectedSkills.filter(id => id !== skillId)
        : [...prev.selectedSkills, skillId]
    }))
  }

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setProfileImage(file)
      setProfileImagePreview(URL.createObjectURL(file))
    }
  }

  const handleWorkImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length + workImages.length <= 4) {
      setWorkImages(prev => [...prev, ...files])
      setWorkImagePreviews(prev => [
        ...prev,
        ...files.map(file => URL.createObjectURL(file))
      ])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await signup(formData, profileImage, workImages)
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8 pt-20">
        <div className="text-center">
          <h2 className="text-4xl font-light text-black">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-black hover:text-gray-800">
              Sign in
            </Link>
          </p>
        </div>

        {error && (
          <div className="text-red-600 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            />
            <input
              type="text"
              name="location"
              required
              placeholder="Location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="University Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            />
          </div>

          {/* Service Provider Option */}
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isServiceProvider"
                name="isServiceProvider"
                checked={formData.isServiceProvider}
                onChange={handleInputChange}
                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              />
              <label htmlFor="isServiceProvider" className="ml-2 block text-sm text-gray-900">
                I want to offer beauty services
              </label>
            </div>

            {formData.isServiceProvider && (
              <div className="space-y-4">
                {/* Skills Selection */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Select your services
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {SERVICE_SKILLS.map(skill => (
                      <div key={skill.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={skill.id}
                          checked={formData.selectedSkills.includes(skill.id)}
                          onChange={() => handleSkillToggle(skill.id)}
                          className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                        />
                        <label htmlFor={skill.id} className="ml-2 block text-sm text-gray-900">
                          {skill.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Work Images */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Upload images of your work (up to 4)
                  </label>
                  <div className="mt-2 flex gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleWorkImagesChange}
                      className="sr-only"
                      id="work-images"
                    />
                    <label
                      htmlFor="work-images"
                      className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                      Choose files
                    </label>
                  </div>
                  {workImagePreviews.length > 0 && (
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {workImagePreviews.map((preview, index) => (
                        <img
                          key={index}
                          src={preview}
                          alt={`Work preview ${index + 1}`}
                          className="h-24 w-24 object-cover rounded-md"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Optional Information */}
          <div className="space-y-4">
            <textarea
              name="bio"
              placeholder="Short biography (optional)"
              value={formData.bio}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              rows={4}
            />
            <input
              type="text"
              name="instagram"
              placeholder="Instagram username (optional)"
              value={formData.instagram}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            />
          </div>

          {/* Profile Picture */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile picture</label>
            <div className="mt-2 flex items-center space-x-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleProfileImageChange}
                className="sr-only"
                id="profile-image"
              />
              <label
                htmlFor="profile-image"
                className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Choose file
              </label>
              {profileImagePreview && (
                <img
                  src={profileImagePreview}
                  alt="Profile preview"
                  className="h-12 w-12 rounded-full object-cover"
                />
              )}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              required
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
            />
            <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-900">
              I agree to the{' '}
              <Link to="/terms" className="font-medium text-black hover:text-gray-800">
                Terms and Conditions
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup 