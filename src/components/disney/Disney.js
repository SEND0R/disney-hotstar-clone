import React from "react";
import "./Disney.css";
import Viewer from "../viewer/Viewer";
import Imageslider from "../slider/Imageslider";
import Moviesrow from "../row/Moviesrow";
import requests from "../../request";

function Disney() {
  return (
    <div className="disney_page">
      <Imageslider sliderImgUrl={requests.fetchTrending} />
      <Viewer />
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
    </div>
  );
}

export default Disney;
