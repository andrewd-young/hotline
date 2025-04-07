import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignup } from '../hooks/useSignup'
import NewService from '../components/NewService'
import React from 'react'

interface ServiceSkill {
  id: string
  name: string
}

const SERVICE_SKILLS: ServiceSkill[] = [
  { id: 'makeup', name: 'Makeup Artist' },
  { id: 'hair', name: 'Hair Styling' },
  { id: 'nails', name: 'Nail Art' },
  { id: 'skincare', name: 'Skincare' }
]

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    password: '',
    isServiceProvider: false,
    selectedSkills: [] as ServiceSkill[],
    bio: '',
    agreeToTerms: false
  })

  const { signup, loading, error } = useSignup()

  // Handle basic text/checkbox/textarea inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // Toggle skill checkboxes
  const handleSkillToggle = (skill: ServiceSkill) => {
    setFormData((prev) => {
      const isSelected = prev.selectedSkills.includes(skill)
      const newSelectedSkills = isSelected
        ? prev.selectedSkills.filter((s) => s.id !== skill.id)
        : [...prev.selectedSkills, skill]

      return { ...prev, selectedSkills: newSelectedSkills }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Pass only formData to signup; we've removed the overall "workImages" array
    await signup(formData)
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
              className="w-full px-3 py-3 border border-gray-300 placeholder-gray-500 
                         text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            />
            <input
              type="text"
              name="location"
              required
              placeholder="Location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border border-gray-300 placeholder-gray-500 
                         text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="University Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border border-gray-300 placeholder-gray-500 
                         text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border border-gray-300 placeholder-gray-500 
                         text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
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
              <label
                htmlFor="isServiceProvider"
                className="ml-2 block text-sm text-gray-900"
              >
                I want to offer beauty services
              </label>
            </div>

            {formData.isServiceProvider && (
              <div className="space-y-4 bg-gray-100 p-6 rounded-md">
                <h3 className="text-lg font-medium text-gray-700">
                  New Service Listings
                </h3>

                {/* Skills Selection (checkboxes) */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Select your services
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {SERVICE_SKILLS.map((skill) => (
                      <div key={skill.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={skill.id}
                          checked={formData.selectedSkills.includes(skill)}
                          onChange={() => handleSkillToggle(skill)}
                          className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                        />
                        <label
                          htmlFor={skill.id}
                          className="ml-2 block text-sm text-gray-900"
                        >
                          {skill.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Render a <NewService> component for each selected skill */}
                {formData.selectedSkills.map((skill, idx) => (
                  <React.Fragment key={skill.id}>
                    <NewService serviceType={skill.name} />
                    {/* Horizontal rule between services if multiple */}
                    {idx < formData.selectedSkills.length - 1 && (
                      <hr className="my-6 border-gray-300 max-w-4xl mx-auto px-8" />
                    )}
                  </React.Fragment>
                ))}
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
              className="w-full px-3 py-3 border border-gray-300 placeholder-gray-500 
                         text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              rows={4}
            />
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
            <label
              htmlFor="agreeToTerms"
              className="ml-2 block text-sm text-gray-900"
            >
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
            className="w-full flex justify-center py-3 px-4 border border-transparent 
                       rounded-md shadow-sm text-sm font-medium text-white bg-black 
                       hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 
                       focus:ring-black disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>
      </div>

      {/* 
        Future expansions for reviews, loyalty points, etc. 
        e.g. Dashboard, booking history, review system, etc.
      */}
    </div>
  )
}

export default Signup
