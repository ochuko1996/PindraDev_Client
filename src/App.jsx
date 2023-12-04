import { Route, Routes } from "react-router-dom"
import Home from "./components/Pages/Home"
import About from "./components/Pages/About"
import Courses from "./components/Pages/Courses"
import Contact from "./components/Pages/Contact"
import './styles.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about_us" element={<About/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default App
