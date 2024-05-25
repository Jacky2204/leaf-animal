import "bootstrap/dist/css/bootstrap.css";
import "./How.css";
import main_img from "./how-img/how1.jpg";
import p1 from "./how-img/p1.webp";
import p2 from "./how-img/p2.webp";
import p3 from "./how-img/p3.webp";
import p4 from "./how-img/p4.webp"

// create a main component(function)
export function Main() {
  return (
    <>
      {/* main Section */}
      <section className="main">
        {/* first para */}
        <div className="mbox1">
          <h1 className="mheading">How to Apply to Adopt</h1>

          <p className="mpara">
            Bringing an animal into your home is a BIG decision and not <br />{" "}
            one to be taken lightly. The entire household needs to agree <br />{" "}
            on the decision before any further steps are taken. We want <br />{" "}
            to ensure that each household is aware of, willing to and able
            <br /> to accept the physical and financial responsibilities of
            <br /> bringing an animal into their home.
          </p>
        </div>

        {/* second image */}
        <div className="mbox2">
          <img src={main_img} alt="cat" className="main_img" />
        </div>
      </section>
    </>
  );
}

// create a main component(function)
export function Process() {
  return (
    <>
      <section className="process">
        <div className="pbox1">
          {/* images */}
          <div className="img">
            <img src={p1} alt="cat" className="pimg" />
          </div>

          {/* paragraph */}
          <div className="ppara">
            <h1 className="pheading">1</h1>
            <p className="p-para">
              Visit our website <br></br> www.leafanimals.com
            </p>
          </div>
        </div>

        <div className="pbox2">
          {/* paragraph */}
          <div className="ppara">
            <h1 className="pheading">2</h1>
            <p className="p-para">
              On the homepage select 'Dogs' or 'Cats' to browse either.
              <br></br> <br></br> ​
              Alternatively, you can click on 'Adopt' in the menu bar and choose
              from there.
            </p>
          </div>

          {/* images */}
          <div className="img">
            <img src={p2} alt="cat" className="pimg" />
          </div>
        </div>
      </section>
    </>
  );
}

export function Dic() {
  return (
    <>
      {/* main Section */}
      <section className="dic"></section>
    </>
  );
}
