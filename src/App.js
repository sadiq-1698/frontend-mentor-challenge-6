import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './components/Banner';
import MapComponent from './components/MapComponent';

function App() {

  const[showLocation, setShowLocation] = useState(false);
  const[ipAddress, setIpAddress] = useState("192.212.174.101");
  const[result, setResult] = useState(null);

  const API_KEY = "at_bw66IjBPNWfpETzkzuXESAdTeI2xf";
  const URL = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ipAddress}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(URL);
      if(response){
        setResult(response.data);
      }
    };
    fetchData();
  },[URL]);

  return (
    <div className="main-wrapper">
      <Banner 
        showLocation={showLocation}
        setResult={setResult}
        setIpAddress={setIpAddress}
        ipAddress={ipAddress}
        result={result}
      />
      <MapComponent 
        showLocation={showLocation} 
        setShowLocation={setShowLocation}
        result={result}
      />
    </div>
  );
}





export default App;
