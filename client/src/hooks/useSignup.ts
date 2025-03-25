import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface SignupFormData {
  name: string
  location: string
  email: string
  password: string
  isServiceProvider: boolean
  selectedSkills: string[]
  bio: string
  instagram: string
  agreeToTerms: boolean
}

export const useSignup = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const signup = async (
    formData: SignupFormData, 
    profileImage: File | null, 
    workImages: File[]
  ) => {
    setLoading(true)
    setError(null)

    try {
      // Create FormData for file upload
      const data = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach(item => data.append(`${key}[]`, item))
        } else {
          data.append(key, value.toString())
        }
      })

      if (profileImage) {
        data.append('profileImage', profileImage)
      }

      workImages.forEach(image => {
        data.append('workImages', image)
      })

      // TODO: Replace with actual API call
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: data,
      })

      if (!response.ok) {
        throw new Error('Signup failed')
      }

      navigate('/login')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return {
    signup,
    loading,
    error,
  }
} 