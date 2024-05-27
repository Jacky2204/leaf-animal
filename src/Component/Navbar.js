import "bootstrap/dist/css/bootstrap.css"
// import navbar from '../Component/navbar img/nimg.webp'
import './Navbar.css'
import nav from '../Component/navbar-img/nimg.webp'
import img1 from '../Component/navbar-img/1st.webp'
import facebook from '../Component/navbar-img/facebook.png'
import instagram from '../Component/navbar-img/instagram (1).png'
import twetter from '../Component/navbar-img/twitter.png'



export function Navbar() {
  return (
    <>
      <div className="main">
        <img src={nav} />

        <ul className="name">


          <li> <a href='About.js'>About</a></li>
          <li> <a href='#'>Adopt</a></li>
          <li> <a href='#'>Foster</a></li>
          <li> <a href='#'>Sponsor</a></li>
          <li> <a href='#'>How to</a></li>
          <li> <a href='#'>Create Profile</a></li>
          <li> <a href='#'>FF Workshop</a></li>
          <li> <a href='#'>Blog</a></li>

        </ul>
      </div>
        <div className="one">
          <img className="img1" src={img1}/>
          <div className="h1">
          <h1>Find your forever companion</h1>
          <button>Start Now</button>
          </div>
       </div>
      

      <div className="fut">
      <div className="futter">
        <ul>
          <li>About Us</li>
          <li>Leaf Friend</li>
          <li>Leaf Partners</li>
        </ul>

        <ul>
          <li>Adopt</li>
          <li>forever</li>
          <li>Sponsor</li>
        </ul>

        <ul>
          <li>Find a Dog</li>
          <li>Find a Cat</li>
          <li>Find a home</li>
          <li>Find a Sponsor</li>
          <li>Contact Us</li>
        </ul>

        <ul>
          <li>Terms of use</li>
          <li>Refund Policy</li>
          <li>Members Conduct</li>
          <li>FAQs</li>
          <li>Adoption Terms</li>
          <li>Upload Terms</li>
          <li>Consultation Terms</li>
          
        </ul>
        <img src={nav}/>
    </div>
       <div >
       <center>
        <a> <img className="icon" src={facebook}/></a>
        <a> <img className="icon" src={instagram}/></a>
        <a> <img className="icon" src={twetter}/></a>
       </center>

       </div>

      </div>
    </>

  );
}