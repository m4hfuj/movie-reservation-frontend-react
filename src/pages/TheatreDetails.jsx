import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


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

const theatres = [
  {
    id: 1,
    name: "PVR Cinemas",
    location: "Mumbai",
    address: "Andheri West, Mumbai",
    phone: "022-1234567",
    email: "pvr.andheri@pvr.in",
    timings: ["10:00 AM", "1:00 PM", "4:00 PM"],
    bgImg: "https://media.cnn.com/api/v1/images/stellar/prod/210406161315-01-movie-theater-covid-0315.jpg?q=w_2129,h_1198,x_0,y_0,c_fill"
  },
  {
    id: 2,
    name: "INOX Cinemas",
    location: "Pune",
    address: "Viman Nagar, Pune",
    phone: "020-1234567",
    email: "inox.viman@inox.in",
    timings: ["10:00 AM", "1:00 PM", "4:00 PM"],
    bgImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Y3KHulslIxvH0dtCuMSZqNNUBd9BRfLCBw&s"
  },
  {
    id: 3,
    name: "Carnival Cinemas",
    location: "Bangalore",
    address: "Marathahalli, Bangalore",
    phone: "080-1234567",
    email: "carnival.marathahalli@carnival.in",
    timings: ["10:00 AM", "1:00 PM", "4:00 PM"],
    bgImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQddPdNk8ZrTz1t9p9WbITu9bndVyc_Z4XlFQ&s"
  }
];



function TheatreDetails() {

  const { mid, tid, sid } = useParams();
  // const movie = movies.find((movie) => movie.mid === );
  const movie = movies.find((movie) => movie.id === parseInt(mid));
  const theatre = theatres.find((theatre) => theatre.id === parseInt(tid));

  return (

    <div className='bg-dark'>
      <Header />

      <div className='container py-5'>
        <h1>{mid} {tid} {sid}</h1>

        <h2>{movie.title}</h2>
        {/* <h2>{theatre.name}</h2> */}

        {/* <h2>Select a seat</h2>

        <div className='seat-map'>
          <div class="row  g-1">

            <div class="col">some</div>


          </div>
        </div> */}

      </div>

      <Footer />
    </div>

  );
};


export default TheatreDetails;
