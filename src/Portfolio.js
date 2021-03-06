import React from 'react'

function Portfolio(){

    return(

        <section class="section">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <h2 class="section-title">Portfolio</h2>
              </div>
            </div>
            <div class="row shuffle-wrapper">

              <div class="col-lg-4 col-6 mb-4 shuffle-item">
                <div class="position-relative rounded hover-wrapper">
                  <img src="/assets/images/portfolio/item-2.png" alt="portfolio-image" class="img-fluid rounded w-100"></img>
                  <div class="hover-overlay">
                    <div class="hover-content">
                      <a class="btn btn-light btn-sm" href="project-single.html">Gihub</a>
                      <br></br>
                      <a class="btn btn-light btn-sm" href="project-single.html">Live Demo</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 mb-4 shuffle-item">
                <div class="position-relative rounded hover-wrapper">
                  <img src="/assets/images/portfolio/item-4.png" alt="portfolio-image" class="img-fluid rounded w-100"></img>
                  <div class="hover-overlay">
                    <div class="hover-content">
                      <a class="btn btn-light btn-sm" href="project-single.html">Github</a>
                      <br></br>
                      <a class="btn btn-light btn-sm" href="project-single.html">Live Demo</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 mb-4 shuffle-item">
                <div class="position-relative rounded hover-wrapper">
                  <img src="/assets/images/portfolio/item-5.png" alt="portfolio-image" class="img-fluid rounded w-100"></img>
                  <div class="hover-overlay">
                    <div class="hover-content">
                      <a class="btn btn-light btn-sm" href="project-single.html">Github</a>
                      <br></br>
                      <a class="btn btn-light btn-sm" href="project-single.html">Live Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    )

}
export default Portfolio