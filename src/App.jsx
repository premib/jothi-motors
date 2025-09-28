import { useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from './components/Navbar/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer/footer';
import NotFound from './pages/NotFound';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import HomeJothiAuto from './pages/JothiAuto/Home';
import WholesaleDealers from './pages/WholesaleDealers';
import AutoSpares from './pages/AutoSpares';

function App() {
  const [navHeight, setNavHeight] = useState(66);  

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,   // changed from 600
        md: 1024, // changed from 900
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar onHeightChange={setNavHeight} />
        <main className='app-main' style={{ marginTop: navHeight }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path='/products' element={<Products />} />
            <Route path='/jothi-car-world' element={<HomeJothiAuto />} />
            <Route path='/wholesale-dealers' element={<WholesaleDealers />} />
            <Route path='/auto-spares' element={<AutoSpares />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </ThemeProvider>
      <Footer />
    </Router>
  )
}

export default App
