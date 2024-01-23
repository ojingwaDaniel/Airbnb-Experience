
import star from './images/Star 1.png'

export default function Cards(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.item.location === 'Online') {
    badgeText = 'ONLINE'
  }
  return (
    <div className="cards" key={props.key}>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={props.item.coverImg} alt="" />
      <div className="card--stat">
        <img src={star} alt="" className="star" />
        <span>{props.item.stats.rating}</span>
        <span className="grey">({props.item.stats.reviewCount}) .</span>
        <span className="grey">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
    
}