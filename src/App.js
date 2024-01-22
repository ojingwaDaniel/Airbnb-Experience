import "./App.css";
import NavBar from "./components/nav";
import Hero from "./components/hero";
import Cards from "./components/card";
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
