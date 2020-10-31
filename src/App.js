import './App.css';
import { useState } from 'react';
import Banner from './components/Banner';
import MapComponent from './components/MapComponent';


// const API_KEY = "at_bw66IjBPNWfpETzkzuXESAdTeI2xf";

function App() {

  const[showLocation, setShowLocation] = useState(false);

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
