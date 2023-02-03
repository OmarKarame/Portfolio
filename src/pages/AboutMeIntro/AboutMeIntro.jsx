import './AboutMeIntro.scss';
import AboutMeLayout from '../../components/AboutMeLayout/AboutMeLayout';
import IntroSection from '../../components/IntroSection/IntroSection';
import { useState } from 'react';


const AboutMeIntro = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const handleScroll = event => {
    setScrollPercentage(event.currentTarget.scrollTop);
    console.log(scrollPercentage);
  };

  return (
    <div className='about-me-intro'>
        <AboutMeLayout 
          mainHeader={"Intro"}
          secondaryHeader={"This is an intro into my journey to become a Software Engineer and Technology Consultant."}
          scrollPercentage = {scrollPercentage}
        /> 
        <IntroSection 
          handleScroll = {handleScroll}
        />
    </div>
  )
}

export default AboutMeIntro