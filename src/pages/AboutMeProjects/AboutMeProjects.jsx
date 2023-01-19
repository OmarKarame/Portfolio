import './AboutMeProjects.scss';
import AboutMeLayout from '../../components/AboutMeLayout/AboutMeLayout';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';

const AboutMeProjects = () => {
  return (
    <div className='about-me-projects'>
        <AboutMeLayout 
          mainHeader={"Projects"}
          secondaryHeader={"These are some of the projects that I have worked on so far."}
        /> 
        <ProjectsSection />
    </div>
  )
}

export default AboutMeProjects