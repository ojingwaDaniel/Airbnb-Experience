import './App.css';
import NavBar from './components/nav';
import Hero from './components/hero';
import Cards from './components/card'
import Img1 from "./components/images/image 12.png";
import Img2 from "./components/images/wedding-photography 1.png";
import Img3 from "./components/images/mountain-bike 1.png";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Cards
        img={Img1}
        rating="5.0"
        reviewCount= {6}
        country="Ghana"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
      <Cards
        img={Img2}
        rating="5.0"
        reviewCount={30}
        country="Nigeria"
        title="Learn wedding photography"
        price={125}

      />
      <Cards
        img={Img3}
        rating="4.8"
        reviewCount={2}
        country="South-Africa"
        title="Group Mountain Biking"
        price={50}
      />
    </div>
  );
}

export default App;
