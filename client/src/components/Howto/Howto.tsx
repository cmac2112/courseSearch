import Layout from '../layout/Layout'
import tutorial1 from '../../assets/tutorial1.png'
import tutorial2 from '../../assets/tutorial2.png'
import tutorial3 from '../../assets/tutorial3.png'
import Header from '../Header'
import './Howto.css'
const Howto = () => {
  return (
    <div>
    <Header>How to use Course Search</Header>
    <Layout>
      <div className="area-1">
        <div className="text-1">
          <h1 className="tutorial-header">Getting Your Course Code</h1>
          <ul className="bullet-list">
          <li><p>Find your course code on <a className="moodle-link" href="https://moodle.bethelks.edu/login/index.php" target="_blank" rel="noreferrer" style={{color: 'blue'}}>Moodle</a></p></li>
          <li><p>Course codes look like: BIO110, CSC230, BUS114</p></li>
          </ul>
        </div>
        <img src={tutorial3} alt="tutorial1" className="tutorial-image" height="50%" width="50%"/>
        </div>

        <div className="area-1">
          <img src={tutorial1} alt="tutorial1" className="tutorial-image" height="50%" width="50%"/>
        <div className="text-1">
          <h1 className="tutorial-header">Searching For Your Course</h1>
          <ul className="bullet-list">
          <li><p>Enter your course code into the search box at the top of the page</p></li>
          <li><p>If the course code is invalid, an error message saying <span className="error">Course not found</span> will appear below it</p></li>
          </ul>
        </div>
        </div>
        <div className="area-1">
        <div className="text-1">
          <h1 className="tutorial-header">Getting Your Course Code</h1>
          <ul className="bullet-list">
          <li><p>The site will display course info and location in the map below</p></li>
          <li><p>The first mark in the middle is used as reference to where the Administrative building is</p></li>
          <li><p>The second mark is the approximate location of your class room</p></li>
          </ul>
        </div>
        <img src={tutorial2} alt="tutorial1" className="tutorial-image" height="50%" width="50%"/>
        </div>

        <div className="area-1">
        <div className="text-1">
          <h1 className="tutorial-header">Whats next for this site?</h1>
          <ul className="bullet-list">
          <li><p>Display floor plans for each building to give an accurate representation where all classrooms are</p></li>
          <li><p>Provide support for classes that are not in the current fall 2024 semester</p></li>
          <li><p>Change hosting from github pages to something better that supports server stuff</p></li>
          <li><p>Store class info and data properly in a database hosted elsewhere</p></li>
          </ul>
        </div>
        </div>
    </Layout>
    </div>
  )
}

export default Howto