import React, { Component } from "react";
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              {/* portfolio-wrapper */}
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" title>
                      <img alt="" src="images/portfolio/screenshot--29-.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>PureCare</h5>
                          <p>Webdevelopment</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" title>
                      <img alt="" src="images/portfolio/balaji.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Balaji Wireless</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title>
                      <img alt="" src="images\portfolio\Tic+Tac+Toe+Game.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Tic-Tac-Toe</h5>
                          <p>React Project</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title>
                      <img alt="" src="images/portfolio/frame.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>PhotoFrame</h5>
                          <p>React Project</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>
                {/* item end */}
              </div>
              {/* portfolio-wrapper end */}
            </div>
            {/* twelve columns end */}
            {/* Modal Popup
	      --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="\images\portfolio\modals\screenshot-29.png"
                alt=""
              />
              <div className="description-box">
                <h4>PureCare</h4>
                <p>
                  The website developed by me and my collegues in my previous
                  company and it is in the final stage for going to live.Used
                  Javascript,HTML/CSS ,SuiteScript in Net Suite platform for the
                  development.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Webdevelopment
                </span>
              </div>
              <div className="link-box">
                <a href="https://purecare.jobinandjismi.in/">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/balaji.png"
                alt=""
              />
              <div className="description-box">
                <h4>Balaji Wireless</h4>
                <p>
                  The website developed by me and my collegues in my previous
                  company.Used backbone.js,SuiteScript,API and Services for
                  creating this with the help of Net Suite platform.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Web Development
                </span>
              </div>
              <div className="link-box">
                <a href="https://www.balajiwireless.com/">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/game.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>React Project</h4>
                <p>
                  To learn React and develop my skills I'm creating small
                  projects in ReactJS and pushing in to github.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  React Project
                </span>
              </div>
              <div className="link-box">
                <a href="https://github.com/anuvarghese1395/tic-tac-toe">
                  Details
                </a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/frame.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>React Project</h4>
                <p>
                  To learn React and develop my skills I'm creating small
                  projects in ReactJS and pushing in to github.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  React Project
                </span>
              </div>
              <div className="link-box">
                <a href="https://github.com/anuvarghese1395/photoframe-arrangement">
                  Details
                </a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-04 End */}

            {/* modal-01 End */}
          </div>
          {/* row End */}
        </section>
      </React.Fragment>
    );
  }
}
