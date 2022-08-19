import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../components/LandingPage'
import DashboardRoutes from './DashboardRoutes'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<DashboardRoutes />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter