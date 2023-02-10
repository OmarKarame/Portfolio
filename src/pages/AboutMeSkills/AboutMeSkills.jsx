import './AboutMeSkills.scss';
import AboutMeLayout from '../../components/AboutMeLayout/AboutMeLayout';
import SkillsSection from '../../components/SkillsSection/SkillsSection';

const AboutMeSkills = () => {
  const scrollPercentage = -1100;

  return (
    <div className='about-me-skills'>
        <AboutMeLayout 
          mainHeader={"Skills"}
          secondaryHeader={"This is an intro into my journey to become a Software Engineer and Technology Consultant."}
          scrollPercentage = {scrollPercentage}
        /> 
        {/* <SkillsSection /> */}
    </div>
  )
}

export default AboutMeSkills