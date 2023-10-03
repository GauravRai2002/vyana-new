import { Routes, Route } from "react-router-dom";
import MainArea from "./components/mainArea/MainArea";
import Navbar from "./components/navbar/Navbar";
import EventExplorer from "./components/EventExplorer/EventExplorer";
import EventsMain from "./components/events/EventsMain";
import { useEffect, useState } from "react";


function App() {
  const [allData, setAllData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/events').then(res => res.json()).then(result =>{
      setAllData(result)
    } )
  },[])
  console.log(allData)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainArea allData={allData}/>}/>
        <Route path="/latestEvents" element={<EventExplorer allData={allData}/>}/>
        <Route path="/event/*" element={<EventsMain allData={allData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
