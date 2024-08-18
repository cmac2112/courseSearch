//sidebar, footer etc
//host children of sidebar and footer
import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'
import './layout.css'
interface LayoutProps {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className="layout">
      <div className="layout-content">
        <Sidebar />
        <div className="content">
          {children}
          </div>
        </div>
        <div className="footer">
        <Footer />
        </div>
    </div>
  )
}

export default Layout