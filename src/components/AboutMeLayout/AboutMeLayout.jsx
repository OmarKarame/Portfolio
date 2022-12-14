import './AboutMeLayout.scss';
import LargeSemiCircle from '../../components/LargeSemiCircle/LargeSemiCircle';
import Header from '../Header/Header';
import AboutMeNav from '../AboutMeNav/AboutMeNav';

const AboutMeLayout = ({ mainHeader, secondaryHeader}) => {
  return (
    <div className='about-me-layout'>
      <LargeSemiCircle /> 
      <Header 
        mainHeader={mainHeader}
        secondaryHeader={secondaryHeader}
        headerClassName={"header-about-me"}
      />
      <AboutMeNav />
    </div>
  )
}

export default AboutMeLayout