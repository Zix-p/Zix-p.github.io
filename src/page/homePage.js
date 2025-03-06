import { Link } from "react-router-dom";
import "../style/homePage.css";

const HomePage = () => {
  return (
    <div className="app-container">
        <header className="header">UCLA Food Hub</header>
        <div className="content">
          <Section title="📍 Restaurant Locations & Hours" description="Find the best food spots around campus." link="/map" buttonText="View Map" />
          <Section title="⏳ Estimated Wait Times" description="Check real-time wait times to avoid long lines." link="/wait-times" buttonText="Check Wait Times" />
          <Section title="📢 Live Updates" description="Stay updated on food availability and closures." link="/updates" buttonText="View Live Updates" />
          <Section title="📦 Mobile Ordering & Pickup" description="Order your meal and pick it up at your convenience." link="/ordering" buttonText="Order Now" />
          <Section title="📷 Live Camera Feeds" description="See live food line views to decide where to eat." link="/cameras" buttonText="View Cameras" />
        </div>
    </div>
  )   
}

const Section = ({ title, description, link, buttonText }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <p>{description}</p >
      <Link className="button" to={link}>{buttonText}</Link>
    </div>
  );
};

export default HomePage;