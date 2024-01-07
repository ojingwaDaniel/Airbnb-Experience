import './App.css';
import NavBar from './components/nav';
import Hero from './components/hero';
import  Cards from './components/card'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Cards/>
    </div>
  );
}

export default App;
