import React,{ useState, useRef } from 'react';

const Banner = ({setIpAddress, showLocation, ipAddress, result}) => {

    const[value, setValue] = useState("");
    const inputRef = useRef(null);

    return (
      <div className="banner">

          <img src={process.env.PUBLIC_URL + '/pattern-bg.png'} alt="top-banner" />

          <h1 className="banner-header">IP Address Tracker</h1>

          <div className="textfield-container">

            <input 
              ref={inputRef}
              type="text" 
              placeholder="Search for any IP address or domain"
              onKeyDown={(event) => {
                if(event.key === 'Enter') {
                  isValidIP(event.target.value);
                }
              }}
              onChange={(e) => setValue(e.target.value)}
            />

            <button onClick={() => isValidIP(value)}>
              <img src={process.env.PUBLIC_URL + '/icon-arrow.svg'} alt="top-banner" />
            </button>

          </div>
          {result && <div className="location-container" style={{display : showLocation ? "flex" : "none"}}>
              <div className="header-span one">
                <div className="span">
                  <span>IP Address</span>
                </div>
                <h2>{ipAddress}</h2>
              </div>
              <div className="header-span two">
                <div className="span">
                  <span>Location</span>
                </div>
                <h2>{result.location.city}, {result.location.region}, {result.location.country}</h2>
              </div>            
              <div className="header-span three">
                <div className="span">
                  <span>Timezone</span>
                </div>
                <h2>UTC : {result.location.timezone}</h2>
              </div>            
              <div className="header-span four">
                <div className="span">
                  <span>ISP</span>
                </div>
                <h2>{result.isp}</h2>
              </div>
          </div>}
          
      </div>
    );

    function checkIsIPV4(entry) {
      var blocks = entry.split(".");
      if(blocks.length === 4) {
        return blocks.every(function(block) {
          return parseInt(block,10) >=0 && parseInt(block,10) <= 255;
        });
      }
      return false;
    }

    function isValidIP(val){
      if(checkIsIPV4(val)){
        setIpAddress(val);
        inputRef.current.value = "";
      }else{
        alert('Invalid IP address');
      }
    }
  
}

export default Banner;