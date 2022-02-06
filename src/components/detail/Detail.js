import React from "react";
import movieTrailer from "movie-trailer";
import { useState } from "react";
import "./Detail.css";
import { useLocation } from "react-router-dom";
import YouTube from "react-youtube";

const baseurl = "https://image.tmdb.org/t/p/original/";

function Detail() {
  const loc = useLocation();
  const movieDetail = loc.state;

  //  youtube vedio ///////////////////////////////////////////////////////////
  const [trailor, setTrailor] = useState("");
  const [showt, setShowt] = useState("none");
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const videoControl = () => {
    if (trailor || showt === "flex") {
      setShowt("none");
      setTrailor("");
    } else {
      const murl = movieDetail.name ? movieDetail.name : movieDetail.title;
      movieTrailer(murl)
        .then((url) => {
          // it gives us a full url of a trailor but we need vedio id
          const ulrId = new URLSearchParams(new URL(url).search);
          const next_Id = ulrId.get("v");
          setTrailor(next_Id);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(trailor);
      setShowt("flex");
    }
  };
  return (
    <>
      <div
        className="detail_container"
        style={{
          backgroundImage: `url(${baseurl}${movieDetail.backdrop_path})`,
        }}
      >
        <div className="image_title">
          <h3>{movieDetail.media_type}</h3>
          <h1>{movieDetail.title}</h1>
          <p>Release Date: {movieDetail.release_date} </p>
        </div>
        <div className="controls_container">
          <button className="play_btn" onClick={videoControl}>
            <img src="/assets/images/play-icon-black.png" alt="" />
            <span>play</span>
          </button>
          <button className="trailer_btn" onClick={videoControl}>
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
      <div className="video" style={{ display: `${showt}` }}>
        <YouTube videoId={trailor} opts={opts} />
        <div className="close" onClick={videoControl}>
          close
        </div>
      </div>
    </>
  );
}

export default Detail;
<h1>hello detail</h1>;
