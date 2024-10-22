import { useState } from 'react'
import ImageChanger from './components/Image Changer/ImageChanger'
import AboutSection from './components/AboutUS/AboutUs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ImageChanger />
     <AboutSection />
    </>
  )
}

export default App
