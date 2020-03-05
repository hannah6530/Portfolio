import React from 'react';

function Blog(){

    return(
      <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="section-title">Blogs</h2>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <article class="card shadow">
              <img class="rounded card-img-top" src="/assets/images/blog/post-3.jpg" alt="post-thumb"></img>
              <div class="card-body">
                <h4 class="card-title"><a class="text-dark" href="blog-single.html">Amazon increase income 1.5 Million</a>
                </h4>
                <p class="cars-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et
                  dolore magna aliqua.</p>
                <a href="blog-single.html" class="btn btn-xs btn-primary">Read More</a>
              </div>
            </article>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <article class="card shadow">
              <img class="rounded card-img-top" src="/assets/images/blog/post-4.jpg" alt="post-thumb"></img>
              <div class="card-body">
                <h4 class="card-title"><a class="text-dark" href="blog-single.html">Amazon increase income 1.5 Million</a>
                </h4>
                <p class="cars-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et
                  dolore magna aliqua.</p>
                <a href="blog-single.html" class="btn btn-xs btn-primary">Read More</a>
              </div>
            </article>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <article class="card shadow">
              <img class="rounded card-img-top" src="/assets/images/blog/post-2.jpg" alt="post-thumb"></img>
              <div class="card-body">
                <h4 class="card-title"><a class="text-dark" href="blog-single.html">Amazon increase income 1.5 Million</a>
                </h4>
                <p class="cars-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et
                  dolore magna aliqua.</p>
                <a href="blog-single.html" class="btn btn-xs btn-primary">Read More</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    );
}
export default Blog;