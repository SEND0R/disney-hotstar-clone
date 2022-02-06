import React from "react";
import "./Detail.css";
import { useLocation } from "react-router-dom";

const baseurl = "https://image.tmdb.org/t/p/original/";

function Detail() {
  const loc = useLocation();
  const movieDetail = loc.state;
  console.log(movieDetail);
  return (
    <div
      className="detail_container"
      style={{ backgroundImage: `url(${baseurl}${movieDetail.backdrop_path})` }}
    >
      <div className="image_title">
        <h3>{movieDetail.media_type}</h3>
        <h1>{movieDetail.title}</h1>
        <p>Release Date: {movieDetail.release_date} </p>
      </div>
      <div className="controls_container">
        <button className="play_btn">
          <img src="/assets/images/play-icon-black.png" alt="" />
          <span>play</span>
        </button>
        <button className="trailer_btn">
          <img src="/assets/images/play-icon-white.png" alt="" />
          <span>trailor</span>
        </button>
        <button className="add_btn">
          <span>+</span>
        </button>
        <button className="group_watch_btn">
          <img src="/assets/images/group-icon.png" alt="" />
        </button>
      </div>
      <div className="discription">
        <p>{movieDetail.overview}</p>
      </div>
    </div>
  );
}

export default Detail;
<h1>hello detail</h1>;
