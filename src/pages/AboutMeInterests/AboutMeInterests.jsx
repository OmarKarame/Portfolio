import './AboutMeInterests.scss';
import AboutMeLayout from '../../components/AboutMeLayout/AboutMeLayout';
import InterestsSection from '../../components/InterestsSection/InterestsSection';

const AboutMeInterests = () => {
  const scrollPercentage = -1100;

  return (
    <div className='about-me-interests'>
        <AboutMeLayout 
          mainHeader={"Interests"}
          secondaryHeader={"These are some of the projects that I have worked on so far."}
          scrollPercentage = {scrollPercentage}
        /> 
        <InterestsSection />
    </div>
  )
}

export default AboutMeInterests