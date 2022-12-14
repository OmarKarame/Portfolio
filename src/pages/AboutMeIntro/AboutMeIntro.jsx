import './AboutMeIntro.scss';
import AboutMeLayout from '../../components/AboutMeLayout/AboutMeLayout';

const AboutMeIntro = () => {
  return (
    <div className='about-me-intro'>
        <AboutMeLayout 
          mainHeader={"Intro"}
          secondaryHeader={"This is an intro into my journey to become a Software Engineer and Technology Consultant."}
        /> 
    </div>
  )
}

export default AboutMeIntro