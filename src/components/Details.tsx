import "../styles/details.scss";

import {Play} from "lucide-react";
function Details(){
  return(
    <div className="details-container">
      <div className="background">
        <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/06/scale.jpg" alt="ass" />
      </div>

      <div className="image-title">
        <img src="https://image.tmdb.org/t/p/original/h40hblm8J1if7T2CBMjCD85HwuD.png" alt="" />
      </div>
      <div className="contentMeta">
        <div className="controls">
          <div className="player">
            <Play  color="black" size={30} />
            <span>Play</span>
          </div>
          <div className="trailer">
            <Play color="white" size={30} />
            <span>Trailer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;