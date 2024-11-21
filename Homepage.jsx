import { Link } from 'react-router-dom';
import './Homepage.css';


const HomePage = () => {
  return (
    <div className="homepage">
      <div className="overlay">
        <header className="homepage-header">
          <h1>Stroke Prediction Chatbot</h1>
          <h2>An ounce of prevention is worth a pound of cure. — Benjamin Franklin</h2>
          <p>The Stroke Predictor is an innovative tool designed to assess individual stroke risk through a series of targeted questions. By analyzing health and lifestyle factors, it provides personalized insights and recommendations. This proactive approach empowers users to understand their risk and take essential steps toward prevention and improved health outcomes.</p>
          <Link to="/chatbot"><button>Get Started</button></Link>
        </header>
      </div>
    </div>
  );
};

export default HomePage;

