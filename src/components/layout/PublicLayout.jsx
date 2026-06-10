import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const PublicLayout = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="public-layout">
      <Navbar />
      <main className={`main-content ${isHome ? 'main-content--home' : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PublicLayout
