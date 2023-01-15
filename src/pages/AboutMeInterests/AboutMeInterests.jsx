import './AboutMeInterests.scss';
import AboutMeLayout from '../../components/AboutMeLayout/AboutMeLayout';
import InterestsSection from '../../components/InterestsSection/InterestsSection';

const AboutMeInterests = () => {
  return (
    <div className='about-me-interests'>
        <AboutMeLayout 
          mainHeader={"Interests"}
          secondaryHeader={"These are some of the projects that I have worked on so far."}
        /> 
        <InterestsSection />
    </div>
  )
}

export default AboutMeInterests