import { Routes, Route } from "react-router-dom";
import MainArea from "./components/mainArea/MainArea";
import Navbar from "./components/navbar/Navbar";
import EventExplorer from "./components/EventExplorer/EventExplorer";
import EventsMain from "./components/events/EventsMain";
import { useEffect, useState } from "react";
import Store from "./components/store/Store";
import Photos from "./components/photos/Photos";
import About from "./components/about/About";


function App() {
  const [allData, setAllData] = useState([])
  useEffect(()=>{
    fetch('https://vyana-sports-back-end.vercel.app/events').then(res => res.json()).then(result =>{
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
        <Route path="/photos/*" element={<Photos/>}/>
        {/* <Route path="/about" element={<About/>}/> */}
        {/* <Route path="/store/*" element={<Store/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
