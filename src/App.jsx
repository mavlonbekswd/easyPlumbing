import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/Header'
import Services from './components/Services'
import About from './components/About'
import SafetyProof from './components/SafetyProof'
import Trustpilot from './components/Trustpilot'
import MapSection from './components/MapSection'
import Awards from './components/Awards'
import FAQ from './components/FAQ'

import Footer from './components/Footer'
import WhyChooseUs from './components/WhyChooseUs'
import ContactAndBook from './components/ContactAndBook'

import LiveChat from './components/LiveChat'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 })
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <div className="bg-light text-secondary font-sans">
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <>
          <Header />
          <WhyChooseUs />
          <Services />
          <About />
          <SafetyProof />
          <Trustpilot />
          <Awards />
          <MapSection />
          <ContactAndBook />
          <FAQ />
          <LiveChat />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
