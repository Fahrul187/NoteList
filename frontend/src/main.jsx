import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './Navbar'
import DetailNote from './DetailNote'
import ProfilePage from './ProfilePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<DetailNote />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
