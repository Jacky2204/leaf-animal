import "bootstrap/dist/css/bootstrap.css";
import "./How.css";
import main_img from "./how-img/how1.jpg";



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
export function Process(props) {
  return (
    <>
      <section className="process">
        <div className="pbox1">
          {/* images */}
          
            <img src={props.i1} alt="" className="pimg" />
          

          {/* paragraph */}
          <div className="ppara">
            <h1 className="pheading">{props.h1}</h1>
            <p className="p-para">
            {props.p1}
            </p>
          </div>
        </div>

        <div className="pbox2">
          {/* paragraph */}
          <div className="ppara">
            <h1 className="pheading">{props.h2}</h1>
            <p className="p-para">
              {props.p2}
            </p>
          </div>

          {/* images */}
          
            <img src={props.i2} alt="." className="pimg" />

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
