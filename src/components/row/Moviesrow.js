import React from "react";
import { useEffect, useState } from "react";
import "./Moviesrow.css";
import axios from "../../axios";
import { Link } from "react-router-dom";

const baseurl = "https://image.tmdb.org/t/p/original/";

function Moviesrow({ title, rowMoviesUrl, isSmallRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getdata() {
      let myresponse = await axios.get(rowMoviesUrl);
      const mydata = myresponse.data.results;
      setMovies(mydata);
    }
    getdata();
  }, []);
  return (
    <div className="movies_row">
      <h3>{title}</h3>
      <div className="movie_container">
        <div className="movie_outer">
          {movies.map((new_movie) => {
            return (
              <Link
                key={new_movie.id}
                to={`/detail/${new_movie.id}`}
                state={new_movie}
                style={{ textDecoration: "none" }}
              >
                <div className="poster_cover">
                  <img
                    className={`poster ${isSmallRow ? "small_poster" : ""}`}
                    src={`${baseurl}${
                      isSmallRow
                        ? new_movie.backdrop_path
                        : new_movie.poster_path
                    }`}
                    alt={`${new_movie.name}`}
                  />
                  <div className="short_dis">
                    <h5>
                      {new_movie.name ? new_movie.name : new_movie.title}{" "}
                    </h5>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Moviesrow;
