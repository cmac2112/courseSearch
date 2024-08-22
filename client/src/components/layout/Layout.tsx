//sidebar, footer etc
//host children of sidebar and footer
import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'
import { SidebarProvider } from '../../contexts/SidebarContext'
import './layout.css'
interface LayoutProps {
  children: React.ReactNode
}
const Layouts: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout-content">
        <Sidebar />
          {children}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return(
    <SidebarProvider>
      <Layouts>
        {children}
      </Layouts>
    </SidebarProvider>
  )
}
export default Layout