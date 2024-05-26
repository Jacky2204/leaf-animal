import 'bootstrap/dist/css/bootstrap.css'
import nav from '../Component/navbar img/nimg.webp'
import './Navbar.css'


export function Navbar() {
  return (
    <>
      <nav class=" back navbar navbar-expand-lg navbar-light  position-fixed top-0 nav" style="z-index:100;width:100%">
        <div class=" container-fluid">
          <img class=" ms-5 nimg navbar-brand" src="./../imges/nav.png" alt=""/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="ms-5 nav-link active" aria-current="page" href="./home.html">About</a>
              </li>
              <li class="nav-item">
                <a class="ms-5 nav-link" href="./gardaning.html">Adopt</a>
              </li>
              <li class="nav-item">
                <a class="ms-5 nav-link" href="./rooms.html">Foster</a>
              </li>
              
                <li class="nav-item">
                  <a class="ms-5 nav-link" href="./about.html">Sponsor</a>
                </li>
                <li class="nav-item">
                  <a class="ms-5 nav-link" href="./contact.html">How To</a>
                </li>
                <li class="nav-item">
                  <a class="ms-5 nav-link" href="./contact.html">Create</a>
                </li>
                <li class="nav-item">
                  <a class="ms-5 nav-link" href="./contact.html">Profile</a>
                </li>
                <li class="nav-item">
                  <a class="ms-5 nav-link" href="./contact.html">FF Workstor</a>
                </li>
                <li class="nav-item">
                  <a class="ms-5 nav-link" href="./contact.html">Blog</a>
                </li>
              
            </ul>
            {/* <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>

      

      
    </>

  );
}