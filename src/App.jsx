import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/Layout'
import Home from './pages/Home'
import Despre from './pages/Despre'
import Software from './pages/Software'
import ErpSintec from './pages/ErpSintec'
import Diasan from './pages/Diasan'
import AplicatiiPersonalizate from './pages/AplicatiiPersonalizate'
import Servicii from './pages/Servicii'
import Hardware from './pages/Hardware'
import Clienti from './pages/Clienti'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="despre" element={<Despre />} />
        <Route path="software" element={<Software />} />
        <Route path="erp-sintec" element={<ErpSintec />} />
        <Route path="diasan" element={<Diasan />} />
        <Route path="aplicatii-personalizate" element={<AplicatiiPersonalizate />} />
        <Route path="servicii" element={<Servicii />} />
        <Route path="hardware" element={<Hardware />} />
        <Route path="clienti" element={<Clienti />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      </Routes>
    </>
  )
}

export default App
