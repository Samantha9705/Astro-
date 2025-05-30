
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './Home/home';
import Astros from './components/astros/astros';
import { Routes, Route } from 'react-router';

function App() {
  

  const links = [
    {id: 1, text:  "HOME", url: "/"},
    {id: 2, text: "APOD", url: "/"},
    {id: 3, text: "ASTROS", url: "/"}
  ];

  return (
    <>
    <Navbar links = {links}/>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/astros" element={<Astros/>}/>
   </Routes>
      
    </>
  )
}

export default App
