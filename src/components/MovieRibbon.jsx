import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function MovieRibbon({movies}) {

  return (
    <>
      <div class="row row-cols-1 row-cols-md-5 g-4">
        
        {movies.map((movie, index) => (
          
          <div key={index} class="col">

            <div class="card h-100 bg-black">
              <img id="up-coming-poster-img" src={movie.posterImg} class="card-img h-100" alt="..."/>
              <div class="card-img-overlay">
                <h5 class="card-title">{movie.title}</h5>
                <p class="card-text">{movie.duration} | {movie.genre} | {movie.rating}</p>
                <p class="card-text">{movie.language}</p>
                <div class="mt-auto d-flex justify-content-center">
                  <button class="btn btn-dark tooltip-down fs-6">
                    <i class="fa-solid fa-ticket"></i> 
                    <span className='fs-6 ms-2'>Make Reservation</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

        ))}

      </div>
    </>

  );
};

export default MovieRibbon;
