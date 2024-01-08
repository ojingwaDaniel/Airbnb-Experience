import Img1 from "./images/image 12.png"
import Img2 from "./images/wedding-photography 1.png";
import Img3 from "./images/mountain-bike 1.png";
import star from './images/Star 1.png'

export default function Cards() {
  return (
    <div className="cards">
      <img src={Img1} alt="" />
      <div>
        <img src={star} alt="" className="star" />
        <span>5.0</span>
        <span>(6) .</span>
        <span>USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>From $136 / person</p>
    </div>
  );
    
}