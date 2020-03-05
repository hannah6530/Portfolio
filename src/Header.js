import React from 'react';

class Header extends React.Component{

    render(){

        return(
            <header class="navigation fixed-top nav-bg">
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <a class="navbar-brand font-tertiary h3" href="index.html"><img src="/assets/images/logo.png" alt="Myself"></img></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                        aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>

                    <div class="collapse navbar-collapse text-center" id="navigation">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                        <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="blog.html">Blog</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="portfolio.html">Portfolio</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </header>


        );
    }




}
export default Header;