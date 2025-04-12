import { useState } from "react"
import Navbar from './components/Navbar/navbar'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx'
import '@fontsource/poppins'
import useScrollFadeIn from "./Hooks/Scroll.js";


function App() {
  const [showcontent, setshowcontent] = useState(false);
  const fadeInRef = useScrollFadeIn({ triggerStart: 'top 90%' });

  return (
    <>
      <Navbar setshowcontent={setshowcontent} />
      {showcontent && (
        <>
          <Outlet />
          <div ref={fadeInRef}>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
export default App
