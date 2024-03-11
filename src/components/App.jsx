import { Routes, Route } from "react-router-dom"
import Navbar from "./navigation/Navbar"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import LocationsPage from "./pages/LocationsPage"
import ContactPage from "./pages/ContactPage"
import Footer from "./shared/Footer"

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <Navbar />
        <main className="px-6">
          <Routes>
            <Route path="/designo-website/" element={<HomePage />} />
            <Route path="/designo-website/about" element={<AboutPage />} />
            <Route path="/designo-website/locations" element={<LocationsPage />} />
            <Route path="/designo-website/contact" element={<ContactPage />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
