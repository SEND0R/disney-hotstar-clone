import React from "react";
import "./Viewer.css";

function Viewer() {
  return (
    <div className="viewer_container">
      <div className="viewer_image">
        <img src="/assets/images/viewers-disney.png" alt="" />
      </div>
      <div className="viewer_image">
        <img src="/assets/images/viewers-pixar.png" alt="" />
      </div>
      <div className="viewer_image">
        <img src="/assets/images/viewers-marvel.png" alt="" />
      </div>
      <div className="viewer_image">
        <img src="/assets/images/viewers-starwars.png" alt="" />
      </div>
      <div className="viewer_image">
        <img src="/assets/images/viewers-national.png" alt="" />
      </div>
    </div>
  );
}

export default Viewer;
