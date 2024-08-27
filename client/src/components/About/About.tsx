import Header from '../Header'
import Layout from '../layout/Layout'
import "./About.css"
import codeimage from "../../assets/codeimage.png"
//import React from 'react'
const About = () => {
  //interact with apis here
  return (
    <div>
      <Header>About</Header>
    <Layout>
      
      <div className="area-1">
        <div className="text-1">
          <h1 className="tutorial-header">About This Site</h1>
          <ul className="bullet-list">
          <li><p>All code can be found <a href="https://github.com/cmac2112/courseSearch" target="_blank" rel="noreferrer" style={{color: 'blue', textDecoration: 'underline'}}>On Github</a></p></li>
          <li><p>As of 8/27/2024 ~150 unique searches have been made</p></li>
          <li><p>Developed using React</p></li>
          </ul>
        </div>
        <img src={codeimage} alt="tutorial1" className="tutorial-image" height="30%" width="30%"/>
        </div>
      
        <div className="area-1">
        <div className="text-1">
          <h1 className="tutorial-header">Want To Build Projects Like This?</h1>
          <ul className="bullet-list">
          <li><p>Join Bethel Software Society <a href="https://forms.gle/nxy7zkRymhd4kNyu8" target="_blank" rel="noreferrer" style={{color: 'blue', textDecoration: 'underline'}}> Here</a></p></li>
          <li><p>No experience required, just a drive to learn</p></li>
          <li><p>We meet every Tuesday at 7pm in WAC 101</p></li>
          </ul>
        </div>
        </div>
    </Layout>
    </div>
  )
}

export default About