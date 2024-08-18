import { useNavigate } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/bclogo.svg';
import './sidebar.css'
import icon from '../../assets/Hamburger_icon.svg.svg';
const Sidebar = () => {
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = React.useState(false);

  const toggleSidebar = () => {
    setIsHidden(!isHidden);
  }
  return (
    <div className={`sidebar ${isHidden ? 'hidden' : ''}`}>
      <div className="icon" onClick={toggleSidebar}><img src={icon} alt="icon" height={20} width={20}/></div>
        <img className="logo" src={logo} alt="logo" />
      <div className="sidebar-title">
        <h1>Course Search</h1>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-clickable" onClick={() => navigate('/courseSearch/')}>Search for a Course</span>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-clickable" onClick={() => navigate('/courseSearch/howTo')}>How To Use</span>
        </div>  
      <div className="sidebar-item">
        <span className="sidebar-clickable" onClick={() => navigate('/courseSearch/about')}>About This Site</span>
      </div>
      <div className="sidebar-item">
        <a href="https://www.youtube.com/@cadenmcarthur2738">Learn How This is Built</a>
      </div>
      <div className="sidebar-item">
        <a href="https://github.com/cmac2112/courseSearch">View Source Code</a>
      </div>
      <div className="sidebar-item">
        <a href="https://www.linkedin.com/in/caden-mcarthur-84b7a62a7/">Connect With Me On LinkedIn</a>
      </div>
      <div className="sidebar-item">
        <a href="https://www.bethelks.edu">Bethel College's Main Site</a>
      </div>
      <div className="sidebar-item">
        <a href='https://moodle.bethelks.edu/login/index.php'>Moodle</a>
      </div>
    </div>
  )
}

export default Sidebar