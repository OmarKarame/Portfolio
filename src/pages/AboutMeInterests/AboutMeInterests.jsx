import './AboutMeInterests.scss';
import AboutMeLayout from '../../components/AboutMeLayout/AboutMeLayout';

const AboutMeInterests = () => {
  return (
    <div className='about-me-interests'>
        <AboutMeLayout 
          mainHeader={"Interests"}
          secondaryHeader={"These are some of the projects that I have worked on so far."}
        /> 
    </div>
  )
}

export default AboutMeInterests