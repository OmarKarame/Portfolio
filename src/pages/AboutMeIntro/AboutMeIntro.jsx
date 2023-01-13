import './AboutMeIntro.scss';
import AboutMeLayout from '../../components/AboutMeLayout/AboutMeLayout';
import IntroSection from '../../components/IntroSection/IntroSection';

const AboutMeIntro = () => {
  return (
    <div className='about-me-intro'>
        <AboutMeLayout 
          mainHeader={"Intro"}
          secondaryHeader={"This is an intro into my journey to become a Software Engineer and Technology Consultant."}
          // percentage={}
        /> 
          <IntroSection />
    </div>
  )
}

export default AboutMeIntro