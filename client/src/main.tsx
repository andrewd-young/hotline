import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Listings from './pages/Listings.tsx'
import Post from './pages/Post.tsx'
import Offering from './pages/Offering.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/post" element={<Post />} />
      <Route path="/offering/:id" element={<Offering />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
