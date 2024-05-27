import "bootstrap/dist/css/bootstrap.css";
import "./Blog.css";

export function Pic(props) {
  return (
    <>
      <section className="main">

      {/* 1 */}

        <div className="box">
          <img src={props.i1} alt="" className="img" />
          <div className="block">
            {/* for top */}
            <div className="top">
              {/* for time */}
              <div className="time">
                <p>{props.t1}</p>
              </div>

              {/* for icon */} 
              <div className="icon">
                <p>⁝</p>
              </div>
            </div>

            {/* for bottom */}
            <div className="bottom">
              {/* heading */}
              <div className="head">
                <h1>{props.h1}</h1>
              </div>

              {/* for eye */}
              <div className="review">
                <div className="eye">
                  <p>👁️ {props.e1}</p>
                </div>
                <div className="heart">
                  <p>❤️</p>
                </div>
              </div>
            </div>
          </div>
        </div>


{/* 2 */}
        <div className="box">
          <img src={props.i2} alt="" className="img" />
          <div className="block">
            {/* for top */}
            <div className="top">
              {/* for time */}
              <div className="time">
                <p>{props.t2}</p>
              </div>

              {/* for icon */}
              <div className="icon">
                <p>⁝</p>
              </div>
            </div>

            {/* for bottom */}
            <div className="bottom">
              {/* heading */}
              <div className="head">
                <h1>{props.h2}</h1>
              </div>

              {/* for eye */}
              <div className="review">
                <div className="eye">
                  <p>👁️ {props.e2}</p>
                </div>
                <div className="heart">
                  <p>❤️</p>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* 3 */}
        <div className="box">
          <img src={props.i3} alt="" className="img" />
          <div className="block">
            {/* for top */}
            <div className="top">
              {/* for time */}
              <div className="time">
                <p>{props.t3}</p>
              </div>

              {/* for icon */}
              <div className="icon">
                <p>⁝</p>
              </div>
            </div>

            {/* for bottom */}
            <div className="bottom">
              {/* heading */}
              <div className="head">
                <h1>{props.h3}</h1>
              </div>

              {/* for eye */}
              <div className="review">
                <div className="eye">
                  <p>👁️ {props.e3}</p>
                </div>
                <div className="heart">
                  <p>❤️</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
