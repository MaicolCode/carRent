import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import AllCarsPage from './pages/AllCarsPage'
import RentCarPage from './pages/RentCarPage'
import InformationCarPage from './pages/InformationCarPage'
import { CarProvider } from './contexts/car'
import { FilterProvider } from './contexts/filter'

function App() {
  return (
    <main>
      <Nav />
      <CarProvider>
        <FilterProvider>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/cars/*' element={<AllCarsPage />}>
              <Route path=':id' element={<InformationCarPage />} />
            </Route>
            <Route path='/rent-car' element={<RentCarPage />} />
          </Routes>
        </FilterProvider>
      </CarProvider>
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default App
