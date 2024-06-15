import React from "react";


function Header() {
  return (
    <>

    <nav class="navbar navbar-expand-lg navbar-dark bg-navbar-color fw-bold">
      <div class="container">
        <a class="navbar-brand" href="#">Book a Movie</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a> 
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>

          {/* <form class="d-flex me-auto">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> */}

          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="me-1"><i class="fa-solid fa-film"></i></span>Movies
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="me-1"><i class="fa-solid fa-bookmark"></i></span>Watchlist
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sign In</a> 
            </li>

          </ul>

        </div>
      </div>
    </nav>
        
    </>
  );
};


export default Header;  //exporting the Header component