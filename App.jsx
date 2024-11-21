

import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Chatbot from './chatbot';

const App = () => {
 return(
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chatbot" element={<Chatbot />} />
       </Routes>
    </Router>
  </div>
  );
};

export default App;

