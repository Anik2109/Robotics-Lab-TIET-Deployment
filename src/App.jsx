import { useState } from "react"
import Navbar from './components/Navbar/navbar'
import Main_content from './Main_content'


function App() {
  const[showcontent,setshowcontent]=useState(false);

  return (
    <>
    <Navbar setshowcontent={setshowcontent} />
    {showcontent && <Main_content />}
    </>
  )
}

export default App
