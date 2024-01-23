import Images from './images/Group 77-1.png'
export default function Hero() {
    return (
      <div className="hero">
        <img src={Images} alt="" />
          <h1>Online Experiences Without Stress</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
      </div>
    );
}