import React from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import logo from '../../assets/bclogo.svg';
import './sidebar.css'
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
        <img className="logo" src={logo} alt="logo" />
      <div className="sidebar-title">
        <h1>Course Search</h1>
      </div>
      <div className="sidebar-item">
        <span onClick={() => navigate('/courseSearch/')}>Search for a Course</span>
      </div>
      <div className="sidebar-item">
        <span onClick={() => navigate('/courseSearch/howTo')}>How To Use</span>
        </div>  
      <div className="sidebar-item">
        <span onClick={() => navigate('/courseSearch/about')}>About This Site</span>
      </div>
      <div className="sidebar-item">
        <a href="https://www.youtube.com/@cadenmcarthur2738">Learn How This is Built</a>
      </div>
    </div>
  )
}

export default Sidebar