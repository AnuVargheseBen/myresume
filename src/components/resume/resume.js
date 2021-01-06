import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
          {/* Education
      ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>
                    Federal Institute Of Science And Technology (FISAT), India
                  </h3>
                  <p className="info">
                    B.tech in Computer Science And Engineering <span>•</span>
                    <em className="date">August 2012-2016</em>
                  </p>
                  <p>University: MG University CG-PA: 7.60</p>
                </div>
              </div>
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>MGMGHSS ,KERALA,INDIA</h3>
                  <p className="info">
                    Higher Secondary<span>•</span>
                    <em className="date">June 2010 - 2012</em>
                  </p>
                  <p>Board: Kerala State Board Status: 92.27%</p>
                </div>
              </div>
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>SJHSS, KERALA,INDIA</h3>
                  <p className="info">
                    SSLC<span>•</span>
                    <em className="date">June 2010</em>
                  </p>
                  <p>Board: Kerala State Board Status: 92.27%</p>
                </div>
              </div>
            </div>
            {/* main-col end */}
          </div>
          {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Jobin and Jismi IT Services LLP</h3>
                  <p className="info">
                    Net Suite and JavaScript Developer, <span>•</span>
                    <em className="date">July 2019 - May 2020</em>
                  </p>
                  <p>
                    Worked as Net suite and Web site developer, focusing on
                    E-commerce websites which use JavaScript, HTML,CSS
                    .Refactored the E-commerce site with respect to customer
                    requirements. Mainly worked in site builder. I’m in the part
                    of customization of Net Suite and mainly worked on Suite
                    Script. Part of maintenance team for Net Suite E-commerce
                    site. The platform using is Net Suite in Jobin and Jismi IT
                    Services,Kottat, Chalakudy,Kerala,India.
                  </p>
                </div>
              </div>
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Quest Innovative Solutions</h3>
                  <p className="info">
                    Python Trainee, <span>•</span>
                    <em className="date">October 2019 - July 2019</em>
                  </p>
                  <p>
                    Worked as a python trainee in Quest Innovative Solutions
                    Kadavanthra, Kochi, Kerala,India.Learned about the python
                    framework Django and had done project for set up a library
                    management using Django Framework.Used Web technologies
                    including HTML,CSS,Bootstrap.
                  </p>
                </div>
              </div>
              {/* item end */}
            </div>
            {/* main-col end */}
          </div>
          {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <p>
                Ability to understand and apply new knowledge quickly.Basic
                knowledge of image authoring tools, to be able to crop, resize,
                or perform small adjustments on an image. I am able to write
                great code from scratch using SOLID principles and are also
                competent in frameworks.Good communication skills: active
                listener, translates ideas effectively, works out mutually
                agreeable solution.Strong oral and written communication skills
                with the ability to communicate technical and non-technical
                concepts to peers.
              </p>
              <div className="bars">
                <ul className="skills">
                  <li>
                    <span className="bar-expand css" />
                    <em>JavaScript</em>
                  </li>
                  <li>
                    <span className="bar-expand css" />
                    <em>HTML/CSS</em>
                  </li>
                  <li>
                    <span className="bar-expand photoshop" />
                    <em>ReactJS</em>
                  </li>
                  <li>
                    <span className="bar-expand jquery" />
                    <em>NodeJS</em>
                  </li>
                  <li>
                    <span className="bar-expand jquery" />
                    <em>mongoDB</em>
                  </li>
                  <li>
                    <span className="bar-expand jquery" />
                    <em>Bootstrap</em>
                  </li>
                  <li>
                    <span className="bar-expand jquery" />
                    <em>Material UI</em>
                  </li>
                  <li>
                    <span className="bar-expand jquery" />
                    <em>jQuery</em>
                  </li>
                </ul>
              </div>
              {/* end skill-bars */}
            </div>
            {/* main-col end */}
          </div>
          {/* End skills */}
        </section>
      </React.Fragment>
    );
  }
}
