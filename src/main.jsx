import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'
import './index.css'
import App from './App'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/*' element={<App />}></Route>)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
