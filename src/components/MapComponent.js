import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

const MapComponent = (props) => {
    return (
      <Map center={[37.4223, -122.085]} zoom={15}>
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?"
          attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />
        <Marker 
          key="unique"
          position={[37.4223, -122.085]}
          onClick={()=>{
            props.setShowLocation((prev) => !prev);
          }}
        />
      </Map>
    );
}

export default MapComponent;