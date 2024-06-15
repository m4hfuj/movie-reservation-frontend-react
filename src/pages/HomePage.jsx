import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieRibbon from '../components/MovieRibbon';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const movies = [
  {
    id: 1,
    title: "Furiosa: A Mad Max Saga",
    duration: "1h 55m",
    genre: "Action, Adventure, Sci-Fi",
    rating: "UA",
    language: "English",
    synopsis: "Snatched from the Green Place of Many Mothers, young Furiosa falls into the hands of a great biker horde led by the warlord Dementus. Sweeping through the Wasteland, they come across the Citadel, presided over by the Immortan Joe.",
    bgImg: "https://images.ctfassets.net/3m6gg2lxde82/3OhUEPxboIGkaOrDPrpA7/08b210d66b7087f7c488ad23df73d5aa/furiosa.png?w=2048&h=1137&fit=fill&f=faces&q=90&fm=webp",
    posterImg: "https://posterspy.com/wp-content/uploads/2024/01/furiosa-poster.jpg",
    trailerURL: "https://www.youtube.com/watch?v=XJMuhwVlca4"
  },
  {
    id: 2,
    title: "Abigail",
    duration: "1h 50m",
    genre: "Horror, Thriller",
    rating: "A",
    language: "English",
    synopsis: "After a group of criminals kidnap the ballerina daughter of a powerful underworld figure, they retreat to an isolated mansion, unaware that they're locked inside with no normal little girl.",
    bgImg: "https://www.rollingstone.com/wp-content/uploads/2024/04/2572_D016_00486R.jpg",
    posterImg: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/5Uq8P6MPj9Ppsns5t82AiCiUaWE.jpg",
    trailerURL: "https://www.youtube.com/watch?v=3PsP8MFH8p0"
  },
  {
    id: 3,
    title: "Avatar: The Way of Water",
    duration: "3h 12m",
    genre: "Action, Adventure, Sci-Fi",
    rating: "UA",
    language: "English",
    synopsis: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
    bgImg: "https://images.thedirect.com/media/article_full/avatar-2-streak.jpg",
    posterImg: "https://wallpapercave.com/wp/wp11685712.jpg",
    trailerURL: "https://www.youtube.com/watch?v=d9Nra8qXAEI"
  },

  {
    id: 4,
    title: "Blade Runner 2024",
    duration: "3h 12m",
    genre: "Action, Adventure, Sci-Fi",
    rating: "UA",
    language: "English",
    synopsis: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
    bgImg: "https://wallpapers.com/images/hd/black-color-background-kvv6asd39zluqt0o.jpg",
    posterImg: "https://alternativemovieposters.com/wp-content/uploads/2022/11/Matt-Ferguson_BladeRunner.jpg",
    trailerURL: "https://www.youtube.com/watch?v=d9Nra8qXAEI"
  },

  {
    id: 5,
    title: "The Godfather",
    duration: "3h 12m",
    genre: "Action, Adventure, Sci-Fi",
    rating: "UA",
    language: "English",
    synopsis: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
    bgImg: "https://wallpapers.com/images/hd/black-color-background-kvv6asd39zluqt0o.jpg",
    posterImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRE47OycwUVN3h-xnZ2zbcrcJR9QNLQBJ9rJuwFGVP4LH2E3R3_2gu88He_73C5FvvQ68&usqp=CAU",
    trailerURL: "https://www.youtube.com/watch?v=d9Nra8qXAEI"
  },

  {
    id: 6,
    title: "Blade Runner 2024",
    duration: "3h 12m",
    genre: "Action, Adventure, Sci-Fi",
    rating: "UA",
    language: "English",
    synopsis: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
    bgImg: "https://wallpapers.com/images/hd/black-color-background-kvv6asd39zluqt0o.jpg",
    posterImg: "https://alternativemovieposters.com/wp-content/uploads/2022/11/Matt-Ferguson_BladeRunner.jpg",
    trailerURL: "https://www.youtube.com/watch?v=d9Nra8qXAEI"
  },

  
  
];


function HomePage() {

  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  
  return (
      <div>
        <Header></Header>

        <div className='py-5 mt-4'>

            {/* <h1 className=''> Movies </h1> */}

            <div className="row align-items-center justify-content-center">
                    
              {/* carousel */}
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  {movies.map((movie, index) => (
                    <button
                      key={movie.id}
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      aria-current={index === 0 ? "true" : "false"}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}

                </div>

                <div class="carousel-inner">
                  {movies.map((movie, index) => (

                    <div key={movie.id} class={`carousel-item ${index === 0 ? "active" : ""}`}>
                      <img id='bg-img' src={movie.bgImg} class="d-block rounded w-100" alt="..."/>
                      <div className="card upper-layer">
                        <div className="row g-0">
                          <div className='col-md-2'></div>
                          <div className="col-md-2">
                            <img id='poster-img' className='img-fluid rounded' src={movie.posterImg} alt="" />
                          </div>
                          <div className="col-md-7 px-5 d-flex align-items-center">
                            <div className='card-body caption'>
                              <h5 className='fw-bold'>{movie.title}</h5>
                              <p className='m-0 text-danger'>{movie.duration} | {movie.genre} | {movie.rating}</p>
                              <p className='m-0 mb-4'>{movie.language}</p>
                              <p className='mt-2 fs-7'>{movie.synopsis}</p>
                              <div className='py-4'>
                                <a className='btn btn-danger' href={movie.trailerURL}>Play Trailer</a>
                                <button onClick={() => handleMovieClick(movie.id)} className='btn btn-primary mx-4'>Make Reservation</button>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-1'></div>
                        </div>
                      </div>
                    </div>

                  ))}
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              {/* carousel */}

            </div>
        </div>

          
        <div className='container py-5 mb-5'>
          <h1>Up Coming</h1>
          <hr />  
          
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

                      <button onClick={() => handleMovieClick(movie.id)} class="btn btn-dark tooltip-down fs-6">
                        <i class="fa-solid fa-ticket"></i> 
                        <span className='fs-6 ms-2'>Make Reservation</span>
                      </button>
                    
                    </div>
                  </div>
                </div>

              </div>

            ))}

          </div>
          
        </div>


        <Footer></Footer>
      </div>
  );
};

export default HomePage;
