import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Groups from "./components/Groups";
import Hero from "./components/Hero";
import MatchResult from "./components/MatchResult";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Groups/>
      <Carousel/>
      <MatchResult/>
      <Footer/>
    </div>
  );
}

export default App;
