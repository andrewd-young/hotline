import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

interface LoginCredentials {
  email: string
  password: string
}

interface AuthUser {
  id: string
  email: string
  name: string
  // Add other user properties as needed
}

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const login = useCallback(async (credentials: LoginCredentials) => {
    setLoading(true)
    setError(null)
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        throw new Error('Invalid credentials')
      }

      const userData = await response.json()
      setUser(userData)
      navigate('/')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }, [navigate])

  const logout = useCallback(async () => {
    setLoading(true)
    try {
      // TODO: Replace with actual API call
      await fetch('/api/auth/logout', {
        method: 'POST',
      })
      setUser(null)
      navigate('/login')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }, [navigate])

  return {
    user,
    loading,
    error,
    login,
    logout,
  }
} 