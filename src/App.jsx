import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { CarProvider } from './contexts/car'
import { FilterProvider } from './contexts/filter'
import { lazy } from 'react'

const HomePage = lazy(() => import('./pages/HomePage'))
const AllCarsPage = lazy(() => import('./pages/AllCarsPage'))
const RentCarPage = lazy(() => import('./pages/RentCarPage'))
const InformationCarPage = lazy(() => import('./pages/InformationCarPage'))
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
