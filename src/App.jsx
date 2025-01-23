import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default App
