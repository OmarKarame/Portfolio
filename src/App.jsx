import './App.scss';
import Nav from './components/Nav/Nav';
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutMeIntro from './pages/AboutMeIntro/AboutMeIntro';

function App() {
  return (
    // add the background rectangle to every page as a background
    // give the background rectangle 3 different classes (one for each page)
    // The background rectangle is half displayed in home, fully displayed in about me and to the right of the screen in contact me
    // The class of the background rectangle is based on the page the user is on
      <Router>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/aboutmeintro" element={<AboutMeIntro />} />
        </Routes>
        <Nav />
      </Router>
  );
}


// Maybe i should have the large circle and black background
// be displayed on every page, but have some if statements 
// that determine where the circle is and if the image is transparent
// and if the design is is in which degree is being displayed


export default App;
