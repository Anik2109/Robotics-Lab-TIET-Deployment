import { useState } from "react"
import Navbar from './components/Navbar/navbar'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer'

function App() {
  const[showcontent,setshowcontent]=useState(false);

  return (
    <>
    <Navbar setshowcontent={setshowcontent} />
    {showcontent && <Outlet />}
    {showcontent && <Footer />}
    </>
  )
}

export default App
