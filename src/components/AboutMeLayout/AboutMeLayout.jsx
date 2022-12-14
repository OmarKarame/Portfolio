import './AboutMeLayout.scss';
import LargeSemiCircle from '../../components/LargeSemiCircle/LargeSemiCircle';
import Header from '../Header/Header';

const AboutMeLayout = ({ mainHeader, secondaryHeader}) => {
  return (
    <div className='about-me-layout'>
      <LargeSemiCircle /> 
      <Header 
        mainHeader={mainHeader}
        secondaryHeader={secondaryHeader}
        headerClassName={"header-about-me"}
      />
      
    </div>
  )
}

export default AboutMeLayout