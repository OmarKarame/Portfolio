import './ProjectsSection.scss'
import WhiteButton from '../WhiteButton/WhiteButton.jsx'
import OrangeButton from '../OrangeButton/OrangeButton.jsx'
import Cryptocurrency from '../../styles/images/cryptocurrency.gif'
import Weather from '../../styles/images/weather.gif'
import Calculator from '../../styles/images/calculator.gif'
import ArtGallery from '../../styles/images/art-gallery-proj.gif'
import FlatFinder from '../../styles/images/flat-finder.gif'
import CryptocurrencyImage from '../../styles/images/cryptocurrency.jpg'
import WeatherImage from '../../styles/images/weather.jpg'
import CalculatorImage from '../../styles/images/calculator.jpg'
import ArtGalleryImage from '../../styles/images/art-gallery-proj.jpg'
import FlatFinderImage from '../../styles/images/flat-finder.jpg'

const ProjectsSection = () => {
  return (
    <div className='projects-section'>
        <div className='projects-components'>
            <div className='image-content-cryptocurrency'>
                <div className='image-section'>
                    <img src={CryptocurrencyImage} alt="Cryptocurrency image" className='cryptocurrency-image'/>
                    <img src={Cryptocurrency} alt="Cryptocurrency gif" className='cryptocurrency-gif'/>
                </div>
            </div>
            <div className='project-content-cryptocurrency'>
                <div className='content-section'>
                    <div className='section-one'>
                        <h2 className='numbers-right'>1.</h2>
                    </div>
                    <div className='section-two'>
                        <h4 className='project-title'>Cryptocurrency Price Update (Web App)</h4>
                        <div className='section-two-buttons'>
                            <WhiteButton 
                                buttonText={"Code"}
                            />
                            <OrangeButton 
                                buttonText={"Download"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='image-content-weather'>
                <div className='image-section'>
                    <img src={WeatherImage} alt="weather image" className='weather-image'/>
                    <img src={Weather} alt="weather gif" className='weather-gif'/>
                </div>
            </div>
            <div className='project-content-weather'>
                <div className='content-section'>
                    <div className='section-one'>
                        <h2 className='numbers-left'>2.</h2>
                    </div>
                    <div className='section-two'>
                        <h4 className='project-title'>Live Weather Forecast (Web App)</h4>
                        <div className='section-two-buttons'>
                            <WhiteButton 
                                buttonText={"Code"}
                            />
                            <OrangeButton 
                                buttonText={"Website"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='image-content-calculator'>
                <div className='image-section'>
                    <img src={CalculatorImage} alt="calculator image" className='calculator-image' />
                    <img src={Calculator} alt="calculator gif" className='calculator-gif'/>
                </div>
            </div>
            <div className='project-content-calculator'>
                <div className='content-section'>
                    <div className='section-one'>
                        <h2 className='numbers-right'>3.</h2>
                    </div>
                    <div className='section-two'>
                        <h4 className='project-title'>Calculator (Locally Hosted)</h4>
                        <div className='section-two-buttons'>
                            <WhiteButton 
                                buttonText={"Code"}
                            />
                            <OrangeButton 
                                buttonText={"Download"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='image-content-art-gallery'>
                <div className='image-section'>
                    <img src={ArtGalleryImage} alt="art gallery image" className='art-gallery-image'/>
                    <img src={ArtGallery} alt="art gallery gif" className='art-gallery-gif'/>
                </div> 
            </div>
            <div className='project-content-art-gallery'>
                <div className='content-section'>
                    <div className='section-one'>
                        <h2 className='numbers-left'>4.</h2>
                    </div>
                    <div className='section-two'>
                        <h4 className='project-title'>Art Gallery (Full-stack)</h4>
                        <div className='section-two-buttons'>
                            <WhiteButton 
                                buttonText={"Code"}
                            />
                            <OrangeButton 
                                buttonText={"Download"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='image-content-flat-finder'>
                <div className='image-section'>
                    <img src={FlatFinderImage} alt="flat finder image" className='flat-finder-image'/>
                    <img src={FlatFinder} alt="flat finder gif" className='flat-finder-gif'/>
                </div>
            </div>
            <div className='project-content-flat-finder'>
                <div className='content-section'>
                    <div className='section-one'>
                        <h2 className='numbers-left'>5.</h2>
                    </div>
                    <div className='section-two'>
                        <h4 className='project-title'>Flat Finder (Web App)</h4>
                        <div className='section-two-buttons'>
                            <WhiteButton 
                                buttonText={"Code"}
                            />
                            <OrangeButton 
                                buttonText={"Website"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectsSection