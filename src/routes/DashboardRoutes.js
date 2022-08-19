import { Routes, Route } from 'react-router-dom'
import About from '../components/About'
import DogDetail from '../components/DogDetail'
import Form from '../components/Form'
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import Layout from '../layout/Layout'

const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="create" element={<Form />} />
            <Route path="dog/:id" element={<DogDetail />} />  
            <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default DashboardRoutes