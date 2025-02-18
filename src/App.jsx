import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import AllCarsPage from './pages/AllCarsPage'
import InformationCarPage from './pages/InformationCarPage'
import RentCarPage from './pages/RentCarPage'

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/all-cars' element={<AllCarsPage />} />
        <Route path='/car/:id' element={<InformationCarPage />} />
        <Route path='/rent-car' element={<RentCarPage />} />
      </Routes>
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default App
