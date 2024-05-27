import "bootstrap/dist/css/bootstrap.css"
// import navbar from '../Component/navbar img/nimg.webp'
import './Home.css'
import nav from '../Component/navbar-img/nimg.webp'
import img1 from '../Component/navbar-img/1st.webp'
import img2 from '../Component/navbar-img/2nd.webp'
import facebook from '../Component/navbar-img/facebook.png'
import instagram from '../Component/navbar-img/instagram (1).png'
import twetter from '../Component/navbar-img/twitter.png'
import icon1 from '../Component/navbar-img/1div.webp'
import icon2 from '../Component/navbar-img/2div.webp'
import icon3 from '../Component/navbar-img/3div.webp'




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
    </>
  );
}

export function Img() {
  return (
    <>
      <section className="img">
        <h1 >Find your forever<br></br> companion</h1>
      </section>
    </>
  );
}

export function Text(){
  return(
    <>
    <div className="maintext">
      <div className="text">
      <h1>Know the </h1>
      <h1>name of the</h1>
      <h1> animal you want?</h1>
      </div>
      <div>
        <form>
          <input className="in" type="text" placeholder="Name"/>
          <input className="sbutten" type="submit" value="search"/>
        </form>
      </div>
    </div>
    </>
  )
}
export function Text1(){
return(
  <>
  <div className="main1">
    <div className="about">
     <h1>About Us</h1>
    <p>Leaf Animals is an adoption website that connects animals in need with the right people. Based online, we work as an independent third party between those looking to rehome an animal and those wishing to adopt, foster or sponsor an animal.</p>
    <input className="sbutten1" type="submit" value="Learn more"/>
    </div>
    <div className="about2">
    <img src={img2}/>
    </div>
</div>

<div className="mainicon">
  <div className="mainicon1">
   <img src={icon1}/>
   <h1>Adopt</h1>
   <p>The number of animals looking for homes is ever-growing. By adopting, you have the power to change a life and to become part of the solution. <a href='#'>Click here</a> to find your companion.</p>
  </div>

  <div className="mainicon1">
  <img src={icon2}/>
  <h1>Foster</h1>
  <p>Sometimes all an animal needs is a temporary home before they are ready to go to their forever homes. <a href='#'>Click here</a> to find an animal to foster. You could help save a life.</p>
  </div>

  <div className="mainicon1">
  <img src={icon3}/>
  <h1>Sponsor</h1>
  <p>If you are unable to adopt or foster an animal, but still want to make a difference, the good news is that you can! <a href='#'>Click here</a> for a list of animals who are looking for sponsors.</p>
  </div>

</div>

  </>
)
}



export function Footer() {
  return (
    <>
      {/* futter */}
      <div className="fut">
        <div className="futter">
          <ul className="ul">
            <li>About Us</li>
            <li>Leaf Friend</li>
            <li>Leaf Partners</li>
          </ul>

          <ul className="ul">
            <li>Adopt</li>
            <li>forever</li>
            <li>Sponsor</li>
          </ul>

          <ul className="ul">
            <li>Find a Dog</li>
            <li>Find a Cat</li>
            <li>Find a home</li>
            <li>Find a Sponsor</li>
            <li>Contact Us</li>
          </ul>

          <ul className="ul">
            <li>Terms of use</li>
            <li>Refund Policy</li>
            <li>Members Conduct</li>
            <li>FAQs</li>
            <li>Adoption Terms</li>
            <li>Upload Terms</li>
            <li>Consultation Terms</li>

          </ul>
          <img src={nav} />
        </div>
        <div >
          <center>
            <a> <img className="icon" src={facebook} /></a>
            <a> <img className="icon" src={instagram} /></a>
            <a> <img className="icon" src={twetter} /></a>
          </center>

        </div>

      </div>

    </>
  );
}