import React from "react";
import { useEffect, useState } from "react";
import axios from "../../axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Imageslider.css";

const baseurl = "https://image.tmdb.org/t/p/original/";
let ind = 0;

function Imageslider({ sliderImgUrl }) {
  const [slideimage, setSlideimage] = useState([]);
  useEffect(() => {
    async function getdata() {
      const slidedata = await axios.get(sliderImgUrl);
      setSlideimage(slidedata.data.results);
    }
    getdata();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplayspeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="myslider">
      {slideimage.map((x) => {
        if (ind == 0) {
          ind = 1;
          return (
            <div key={x.id ? x.id : x.title}>
              <div
                className="slide_inner"
                style={{
                  backgroundImage: `url(${baseurl}${x.backdrop_path})`,
                }}
              >
                <div className="slide_discription">
                  <h1>{x.title}</h1>
                  <p>{x.overview}</p>
                </div>
              </div>
              {/* <img
              className="slider_image"
              src={`${baseurl}${x.backdrop_path}`}
              alt=""
            /> */}
            </div>
          );
        } else {
          ind = 0;
        }
      })}
    </Slider>
  );
}

export default Imageslider;
