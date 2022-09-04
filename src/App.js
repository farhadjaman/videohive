import './App.css';
// import Home from './pages/Home';
import Video from './pages/Video';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos/:videoId' element={<Video />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
