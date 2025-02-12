import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import AllCarsPage from './pages/AllCarsPage'

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/all-cars' element={<AllCarsPage />} />
      </Routes>
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default App
