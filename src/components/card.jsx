
import star from './images/Star 1.png'

export default function Cards({ img, rating, reviewCount, location, title, price, openSpots }) {
  let badgeText
  if (openSpots === 0 ) {
    badgeText = 'SOLD OUT'
  }else if (location == 'Online') {
    badgeText = 'ONLINE'
  }
  return (
    <div className="cards">
      {badgeText && <div className='card--badge'>{badgeText}</div>}
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