import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './components/Banner';
import MapComponent from './components/MapComponent';

function App() {

  const[showLocation, setShowLocation] = useState(false);
  const[ipAddress, setIpAddress] = useState("192.212.174.101");

  const API_KEY = "at_bw66IjBPNWfpETzkzuXESAdTeI2xf";
  const URL = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ipAddress}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(URL);
      if(response){
        setData(response.data);
      }
    };
    fetchData();
  },[URL]);

  return (
    <div className="main-wrapper">
      <Banner 
        showLocation={showLocation}
      />
      <MapComponent 
        showLocation={showLocation} 
        setShowLocation={setShowLocation}
      />
    </div>
  );
}





export default App;
