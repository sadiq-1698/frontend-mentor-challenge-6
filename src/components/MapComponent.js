import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

const MapComponent = (props) => {

  let result = null;

  if(props.result){
    result = props.result;
  }

    return (
      !result ? <center>Loading...</center> :
      <Map center={[34.0614, -118.08162]} zoom={15}>
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?"
          attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />
        <Marker 
          key="unique"
          position={[result.location.lat, result.location.lng]}
          onClick={()=>{
            props.setShowLocation((prev) => !prev);
          }}
        />
      </Map>
    );
}

export default MapComponent;