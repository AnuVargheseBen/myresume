import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </li>
             
            </ul>{" "}
            {/* end #nav */}
          </nav>{" "}
          {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm Anu Varghese.</h1>
              <h3>
                I'm  <span>JavaScript Developer</span>,{" "}
                and <span>Net Suite Developer</span> creating
                awesome and effective websites for companies of all
                sizes around the globe. Let's{" "}
                <a className="smoothscroll" href="#about">
                  start scrolling and  learn more{" "}
                </a>
                
                <a className="smoothscroll" href="#about">
                  about me
                </a>
                .
              </h3>
              <hr />
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/anu.varghese.50702769/">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/anuvarghese1395">
                    <i className="fa fa-github" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/anu-varghese-00b9bbb6/">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/anu.ben_varghese/">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-skype" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
          ..
        </header>
      </React.Fragment>
    );
  }
}
