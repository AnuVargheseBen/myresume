import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images\profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                Experienced Developer with a demonstrated history of working in
                the computer software industry. Skilled in JavaScript, React
                ,NodeJs, HTML, Bootstrap, Cascading Style Sheets (CSS),
                and Net Suite. Strong engineering professional with a Bachelor
                of technology focused in Computer Science from Federal institute
                of science and technology.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Anu varghese</span>
                    <br />
                    <span>
                    Grellstraße 10H
                      <br />
                      10409,Berlin,germany
                    </span>
                    <br />
                    <span>+49-17663609098</span>
                    <br />
                    <span>anuvarghese1395@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                
                </div>
              </div>{" "}
              {/* end row */}
            </div>{" "}
            {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
