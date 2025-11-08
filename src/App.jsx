import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './SignUp'
import Contact from './Contact';
import Services from './Services'
import BackToTop from './BackToTop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>

      {/*<h1>React Website</h1>*/}
      {/*<SliderComponent />*/}
      {/*<SignUp />*/}
      {/*<User/>*/}
      {/*<button>test</button>*/}
      {/*<Fruit></Fruit>*/}
      <BackToTop />
      <Footer />
    </div>
  )
}

export default App
