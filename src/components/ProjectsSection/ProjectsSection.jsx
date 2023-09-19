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
import CommitToExcellence from '../../styles/images/cte-logo-white.png'


const ProjectsSection = ({handleScroll}) => {
    const linkToCryptoProject = () => {
        window.open("https://github.com/OmarKarame/crypto-currency-api", '_blank');
    }
    const linkToCTE = () => {
        window.open("https://commit-to-excellence.web.app/", '_blank');
    }
    const linkToCalculator = () => {
        window.open("https://github.com/OmarKarame/JS-Calculator", '_blank');
    }
    const linkToArtGallery = () => {
        window.open("https://github.com/OmarKarame/Digital-Art-Gallery-Full-Stack-", '_blank');
    }
    const linkToFlatFinder = () => {
        window.open("https://github.com/hamima27/The-Flat-Finder", '_blank');
    }
    const linkToCTECode = () => {
        window.open("https://github.com/OmarKarame/Commit-To-Excellence-Backend", '_blank');
    }
  return (
    <div className='projects-section' onScroll={handleScroll}>
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
                                handleButtonClick ={linkToCryptoProject}
                            />
                            <OrangeButton
                                buttonText={"Download"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='image-content-cte'>
                <div className='image-section'>
                    <img src={CommitToExcellence} alt="commit to excellence logo" className='cte-img'/>
                    <img src={CommitToExcellence} alt="commit to excellence logo" className='cte-img'/>
                </div>
            </div>
            <div className='project-content-cte'>
                <div className='content-section'>
                    <div className='section-one'>
                        <h2 className='numbers-left'>2.</h2>
                    </div>
                    <div className='section-two'>
                        <h4 className='project-title'>AI Generated Commit Messages (CLI Commands)</h4>
                        <div className='section-two-buttons'>
                            <WhiteButton
                                buttonText={"Code"}
                                handleButtonClick ={linkToCTECode}
                            />
                            <OrangeButton
                                buttonText={"Website"}
                                handleButtonClick ={linkToCTE}
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
                                handleButtonClick ={linkToCalculator}
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
                                handleButtonClick ={linkToArtGallery}
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
                                handleButtonClick ={linkToFlatFinder}
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
