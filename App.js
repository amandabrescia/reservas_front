import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewService from './components/pages/NewService'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


import './index.css';

function App() {
  return (
    <Router>
    <Navbar/>
      <Container customClass="min-height">
        <Routes>
      
          <Route path="/" element={<Home />} >
          </Route>
          <Route path="/company" element={<Company />} >
          </Route>
          <Route path="/newservice" element={<NewService />} >
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
       
       </Routes>
      </Container>
     <Footer/>
    </Router>
  )
}

export default App;
