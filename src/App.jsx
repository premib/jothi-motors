import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.scss'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

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
import PriceList from './pages/PriceList';

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

  // Brand lazy-loader component
  const BrandPage = () => {
    const { brand } = useParams();
    if (!brand) return <Navigate to="/" replace />;

    // file names are uppercase (GDR.jsx / SPR.jsx) so normalize
    const fileName = brand.toLowerCase();

    console.log(`Attempting to load brand page for '${fileName}'`);

    // dynamically import the matching brand page; show NotFound if import fails
    const LazyComp = lazy(() =>
      import(`./pages/OurBrands/${fileName}.jsx`)
      .catch(() => ({
        default: () => {
          console.log(`Brand page for '${fileName}' not found.`);
          return <NotFound />;
        }
      }))
    );

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComp />
      </Suspense>
    );
  };

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
            <Route path='/price-list' element={<PriceList />} />
            <Route path='/home' element={<Navigate to={'/'} replace/>} />
            <Route path='/our-brands/:brand' element={<BrandPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </ThemeProvider>
      <Footer />
    </Router>
  )
}

export default App
