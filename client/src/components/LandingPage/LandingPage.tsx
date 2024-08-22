import './LandingPage.css'
import Sidebar from '../sidebar'
import { SidebarProvider, useSidebar } from '../../contexts/SidebarContext'
const LandingPages = () => {
    const { toggleSidebar } = useSidebar();
  return (
    <div className="landing-page">
        <Sidebar />
        <div className="bg-gradient" />
        <div className="bg-image"/>
        <div className='header'>
            <div>
        <h2>Welcome to Course Search for Bethel College</h2>
        <button onClick={toggleSidebar}className="search-button">Get Started</button>
        </div>
        </div>
        </div>

  )
}

const LandingPage = () => {
    return(
        <SidebarProvider>
            <LandingPages />
        </SidebarProvider>
    )
}


export default LandingPage