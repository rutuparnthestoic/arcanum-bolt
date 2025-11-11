import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurStory from './pages/OurStory';
import OurOfferings from './pages/OurOfferings';
import OurApproach from './pages/OurApproach';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OurStory />} />
        <Route path="/offerings" element={<OurOfferings />} />
        <Route path="/approach" element={<OurApproach />} />
      </Routes>
    </Router>
  );
}

export default App;
