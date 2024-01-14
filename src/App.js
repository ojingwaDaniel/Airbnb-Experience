import "./App.css";
import NavBar from "./components/nav";
import Hero from "./components/hero";
import Cards from "./components/card";
// import Img1 from "./components/images/image 12.png";
// import Img2 from "./components/images/wedding-photography 1.png";
// import Img3 from "./components/images/mountain-bike 1.png";
import data from "./data";
function App() {
  const DataElement = data.map((item) => {
    return (
      <Cards
        key={item.id}
        img={item.coverImg}
        title={item.title}
        description={item.description}
        price={item.price}
        reviewCount={item.stats.reviewCount}
        rating={item.stats.rating}
        location={item.location}
        openSpots = {item.openSpots}
      />
    );
  });
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className="cards-list">{DataElement}</section>
    </div>
  );
}

export default App;
