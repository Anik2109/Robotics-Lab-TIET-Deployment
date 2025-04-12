import { useState } from "react"
import Navbar from './components/Navbar/navbar'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx'
import '@fontsource/poppins'
import useScrollFadeIn from "./Hooks/Scroll.js";
import ScrollToTop from "./utils/ScrollToTop.jsx";


function App() {
  const [showcontent, setshowcontent] = useState(false);
  const fadeInRef = useScrollFadeIn({ triggerStart: 'top 90%' });

  return (
    <>
      <Navbar setshowcontent={setshowcontent} />
      <ScrollToTop />
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
