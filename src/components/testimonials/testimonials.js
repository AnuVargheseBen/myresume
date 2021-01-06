import React, { Component } from "react";
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1>
                  <span>Client Testimonials</span>
                </h1>
              </div>
              <div className="ten columns flex-container">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <blockquote>
                        <p>
                          Anu worked in a New technology and it was 100 percent
                          succesful. Eventhough she is a fresher she learned the
                          technology and worked hard to meet the requirments of
                          the client and they was super happy.
                        </p>
                        <cite>
                          Ravin Arooja(Jobin and Jismi IT Services LLP)
                        </cite>
                      </blockquote>
                    </li>
                    <li>
                      <blockquote>
                        <p>
                          It has been a real pleasure working with Anu. He has
                          been very professional and very clear in all
                          communications, which I appreciate.
                        </p>
                        <cite>
                          Rosemol Francis(Jobin and Jismi IT Services LLP)
                        </cite>
                      </blockquote>
                    </li>
                    {/* slide ends */}

                    {/* slide ends */}
                  </ul>
                </div>
                {/* div.flexslider ends */}
              </div>
              {/* div.flex-container ends */}
            </div>
            {/* row ends */}
          </div>
          {/* text-container ends */}
        </section>
      </React.Fragment>
    );
  }
}
