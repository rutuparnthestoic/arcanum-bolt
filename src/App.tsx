import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurStory from './OurStory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OurStory />} />
      </Routes>
    </Router>
  );
}

export default App;
