import Img1 from "./images/image 12.png"
import Img2 from "./images/wedding-photography 1.png";
import Img3 from "./images/mountain-bike 1.png";
import star from './images/Star 1.png'

export default function Cards() {
  return (
    <div className="cards">
      <div>
        <img src={Img1} alt="NoImage" />
        <div className="details">
          <img src={star} alt="" className="star" />
          <h5>
            5,0
            <span>(6) USA</span>
          </h5>
        </div>
      </div>
      <div>
        <img src={Img2} alt="NoImage" />
        <div className="details">
          <img src={star} alt="" className="star" />
          <h5>
            5,0
            <span>(6) USA</span>
          </h5>
        </div>
      </div>
      <div>
        <img src={Img3} alt="NoImage" />
        <div className="details">
          <img src={star} alt="" className="star" />
          <h5>
            5,0
            <span>(6) USA</span>
          </h5>
        </div>
      </div>
    </div>
  );
    
}