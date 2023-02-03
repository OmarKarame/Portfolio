import './App.scss';
import Nav from './components/Nav/Nav';
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutMeIntro from './pages/AboutMeIntro/AboutMeIntro';
import AboutMeSkills from './pages/AboutMeSkills/AboutMeSkills';
import AboutMeProjects from './pages/AboutMeProjects/AboutMeProjects';
import AboutMeInterests from './pages/AboutMeInterests/AboutMeInterests';

function App() {
  return (
      <Router>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/aboutmeintro" element={<AboutMeIntro />} />
         <Route path="/aboutmeSkills" element={<AboutMeSkills />} />
         <Route path="/aboutmeprojects" element={<AboutMeProjects />} />
         <Route path="/aboutmeinterests" element={<AboutMeInterests />} />
        </Routes>
        <Nav />
      </Router>
  );
}


export default App;
