import './App.css';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import "./index.css"
import Navbar from './Components/Navbar/Navbar';
import "./i18n";
import Project from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact/Contact';
import Updates from './Pages/Updates/Updates';


const Router =()=>{
  return(
    <BrowserRouter>
       <Navbar/>
       <Routes>
           <Route  path={"/"} element={<LandingPage/>}/>
           <Route  path={"/projects"} element={<Project/>}/>
           <Route  path={"/about"} element={<About/>}/>
           <Route  path={"/contact"} element={<Contact/>}/>
           <Route  path={"/updates"} element={<Updates/>}/>
           <Route path="*" element={<Navigate to="/" replace />} />
       </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <>
    <Router/>
    </>
  )
}

export default App
