import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ThreeDPage from './pages/ThreeDPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-plan" element={<ThreeDPage />} />
      </Routes> 
    </Router>
  );
}

export default App;