import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Contact from './Contact'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-[#FFFDF7] dark:bg-[#0F1117] flex flex-col transition-colors duration-200">
      <Navbar />
      <main className="flex-1 pt-[60px]">
        <Outlet />
      </main>
      <Contact />
      <Footer />
    </div>
  )
}
