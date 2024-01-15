
import star from './images/Star 1.png'

export default function Cards({img,rating,reviewCount,location,title,price,openSpots}) {
  return (
    <div className="cards">
      {openSpots === 0 && <div className='card--badge'>SOLD OUT</div>}
      <img src= {img} alt="" />
      <div className="card--stat">
        <img src={star} alt="" className="star" />
        <span>{rating}</span>
        <span className="grey">({reviewCount}) .</span>
        <span className="grey">{location }</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">From ${ price}</span> / person
      </p>
    </div>
  );
    
}