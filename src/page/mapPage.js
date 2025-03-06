import "../style/homePage.css";
import { Link } from "react-router-dom";

const MapPage = () => {

    return (
        <div className="app-container">
            <header className="header">
                <Link to="/"> Back</Link>
                UCLA Food Hub
                </header>
            <div className="map-content">
                <iframe
                    title="map"
                    width="100%"
                    height="800px"
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/search?key=AIzaSyB3V4YH3ZgSIjWZ7O5dOoaMzgcxd6hQOUY&q=restaurants-near-ucla"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}

export default MapPage;