
import star from './images/Star 1.png'

export default function Cards({img,rating,reviewCount,country,title,price}) {
  return (
    <div className="cards">
      <img src={img} alt="" />
      <div className="card--stat">
        <img src={star} alt="" className="star" />
        <span>{rating}</span>
        <span className="grey">({reviewCount}) .</span>
        <span className="grey">{country }</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">From ${ price}</span> / person
      </p>
    </div>
  );
    
}