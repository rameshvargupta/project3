
import React from 'react'
import Last from './Last'

const Navbar = () => {
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg " id='navbar1'>
                <div class="container-fluid">
                    <a class="navbar-brand mx-5 fs-3" href="#">College Disha</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-around " id="navbarSupportedContent">
                        <ul class="navbar-nav me-1 mb-2 mb-lg-0 fs-5">


                            <li class="nav-item mx-4">
                                <a class="nav-link active" aria-current="page" href="#">Why College Disha</a>
                            </li>
                            <li class="nav-item mx-4">
                                <a class="nav-link active" aria-current="page" href="#">College By Steam </a>
                            </li>
                            <li class="nav-item mx-4">
                                <a class="nav-link active" aria-current="page" href="#">Assesment</a>
                            </li>
                            <li class="nav-item mx-4">
                                <a class="nav-link active" aria-current="page" href="#">Explore</a>
                            </li>
                            <li class="nav-item mx-4">
                                <a class="nav-link active" aria-current="page" href="#">Plans</a>
                            </li>



                        </ul>
                        <form class="d-flex" role="search">
        <button class="btn btn-outline-success" type="submit">Search</button>
        <p style={{paddingTop:"5px",marginLeft:"5px"}}>Login / Register</p>
      </form>
                    </div>
                </div>
            </nav>
           <div className="container my-5">
            <div className="row">
                <div className="col-sm-12 col-lg-7">
                    <div className="side1">
                    <h1>
                        College Disha Services
                    </h1>
                    <p >We offer various education counselling services so we have crafted Four different plans based on the types of services you may need.</p>
                    </div>
                    
                </div>
                <div className="col-sm-12 col-lg-5">
                  <div className="side2">
                    <img width={"350px"} src="hero.jpg" alt="" />
                  </div>
                </div>
            </div>
           </div>
           <Last/>
        </div>
    )
}

export default Navbar
