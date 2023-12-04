import { Routes, Route } from "react-router-dom";
import MainArea from "./components/mainArea/MainArea";
import Navbar from "./components/navbar/Navbar";
import EventExplorer from "./components/EventExplorer/EventExplorer";
import EventsMain from "./components/events/EventsMain";
import { useEffect, useState } from "react";
import Store from "./components/store/Store";
import Photos from "./components/photos/Photos";
import About from "./components/about/About";
import DetailedServices from "./components/detailedServices/DetailedServices";
import DetailedPlanning from "./components/detailedServices/DetailedPlanning";
import DetailedJDesign from "./components/detailedServices/DetailedJDesign";
import DetailedTDesign from "./components/detailedServices/DetailedTDesign";
import DetailedLiveStream from "./components/detailedServices/DetailedLiveStream";
import DetailedFaceRecognition from "./components/detailedServices/DetailedFaceRecognition";
import DetailedLiveScoring from "./components/detailedServices/DetailedLiveScoring";
import Contact from "./components/contact/Contact";
import Footer from './components/footer/Footer';
import ParticipatingTeams from "./components/ParticipatingTeams/ParticipatingTeams";
import TeamTable from "./components/ParticipatingTeams/TeamTable";


function App() {
  const [allData, setAllData] = useState([])
  useEffect(()=>{
    fetch('https://vyana-sports-back-end.vercel.app/events').then(res => res.json()).then(result =>{
      //result.reverse()
      setAllData(result)
    } )
  },[])
  // console.log(allData)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainArea allData={allData}/>}/>
        <Route path="/latestEvents" element={<EventExplorer allData={allData}/>}/>
        <Route path="/event/*" element={<EventsMain allData={allData}/>}/>
        <Route path="/teams/*" element={<ParticipatingTeams/>}/>
        <Route path="/team/*" element={<TeamTable/>}/>
        <Route path="/photos/*" element={<Photos/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/auction" element={<DetailedServices/>}/>
        <Route path="/planning" element={<DetailedPlanning/>}/>
        <Route path="/j_design" element={<DetailedJDesign/>}/>
        <Route path="/t_design" element={<DetailedTDesign/>}/>
        <Route path="/live_streaming" element={<DetailedLiveStream/>}/>
        <Route path="/face_recognition" element={<DetailedFaceRecognition/>}/>
        <Route path="/live_scoring" element={<DetailedLiveScoring/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* <Route path="/store/*" element={<Store/>}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
