import { Routes, Route } from "react-router-dom";
import MainArea from "./components/mainArea/MainArea";
import Navbar from "./components/navbar/Navbar";
import EventExplorer from "./components/EventExplorer/EventExplorer";
import EventsMain from "./components/events/EventsMain";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainArea/>}/>
        <Route path="/latestEvents" element={<EventExplorer/>}/>
        <Route path="/event/*" element={<EventsMain/>}/>
      </Routes>
    </div>
  );
}

export default App;
