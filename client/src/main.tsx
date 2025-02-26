import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Listings from './pages/listings.tsx'
import Post from './pages/post.tsx'
import Offering from './pages/offering.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/post" element={<Post />} />
      <Route path="/offering" element={<Offering />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
