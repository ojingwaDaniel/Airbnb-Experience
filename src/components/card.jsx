import Img1 from "./images/image 12.png"
import Img2 from "./images/wedding-photography 1.png";
import Img3 from "./images/mountain-bike 1.png";

export default function Cards() {
  return (
    <div className="cards">
      <img src={Img1} alt="NoImage" />
      <img src={Img2} alt="NoImage" />
      <img src={Img3} alt="NoImage" />
    </div>
  );
    
}