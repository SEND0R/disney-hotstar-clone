import React from "react";
import "./Home.css";
import Imageslider from "../slider/Imageslider";
import Moviesrow from "../row/Moviesrow";
import requests from "../../request";

function Home() {
  return (
    <main className="main">
      <Imageslider sliderImgUrl={requests.fetchHorrorMovies} />
      <Moviesrow title="Trending" rowMoviesUrl={requests.fetchTrending} />
      <Moviesrow
        title="RomanceMovies"
        rowMoviesUrl={requests.fetchRomanceMovies}
      />
      <Moviesrow
        title="HorrorMovies"
        rowMoviesUrl={requests.fetchHorrorMovies}
      />
      <Moviesrow
        title="ComedyMovies"
        rowMoviesUrl={requests.fetchComedyMovies}
      />
      <Moviesrow
        title="Documentaries"
        rowMoviesUrl={requests.fetchDocumentaries}
      />
      <Moviesrow
        title="Other plateforms movies"
        rowMoviesUrl={requests.fetchNetflixOriginals}
        isSmallRow
      />
    </main>
  );
}

export default Home;
