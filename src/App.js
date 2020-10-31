import './App.css';

function App() {
  return (
    <div className="main-wrapper">
      <Banner />
    </div>
  );
}

const Banner = () => {
  return (
    <div className="banner">
        <img src={process.env.PUBLIC_URL + '/pattern-bg.png'} alt="top-banner" />
        <h1 className="banner-header">IP Address Tracker</h1>
        <div className="textfield-container">
          <input type="text" placeholder="Search for any IP address or domain"/>
          <button>
            <img src={process.env.PUBLIC_URL + '/icon-arrow.svg'} alt="top-banner" />
          </button>
        </div>
        <div className="location-container">
            <div className="header-span">
              <span>IP Address</span>
              <h2>192.168.1.10</h2>
            </div>
            <div className="header-span">
              <span>Location</span>
              <h2>Brooklyn, NY, USA</h2>
            </div>            
            <div className="header-span">
              <span>Timezone</span>
              <h2>UTC : 05:00</h2>
            </div>            
            <div className="header-span">
              <span>ISP</span>
              <h2>SpaceX Starlink</h2>
            </div>
        </div>
    </div>
  );
}

export default App;
