import './AboutMeProjects.scss';
import AboutMeLayout from '../../components/AboutMeLayout/AboutMeLayout';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import { useState } from 'react';

const AboutMeProjects = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const handleScroll = event => {
    setScrollPercentage(event.currentTarget.scrollTop);
  };
  return (
    <div className='about-me-projects'>
        <AboutMeLayout 
          mainHeader={"Projects"}
          secondaryHeader={"These are some of the projects that I have worked on so far."}
          scrollPercentage = {scrollPercentage/0.4}
        /> 
        <ProjectsSection 
          handleScroll = {handleScroll}
        />
    </div>
  )
}

export default AboutMeProjects