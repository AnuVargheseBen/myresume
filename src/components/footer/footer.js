import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li>
                  <a
                    href="https://www.facebook.com/anu.varghese.50702769/"
                    target="_blank"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/anuvarghese1395" target="_blank">
                    <i className="fa fa-github" />
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.linkedin.com/in/anu-varghese-00b9bbb6/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/anu.ben_varghese/"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open" />
              </a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
