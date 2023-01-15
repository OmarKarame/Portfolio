import './InterestsSection.scss';
import { useState } from 'react';
import Art from '../../styles/images/art.gif';
import Sports from '../../styles/images/football.gif';
import Space from '../../styles/images/saturn.gif';
import Podcasts from '../../styles/images/podcasts.gif';
import Origami from '../../styles/images/origami.gif';
import Gaming from '../../styles/images/gaming.gif';
import Hand from '../../styles/images/hand.png';
import Arrowhead from '../../styles/images/arrowhead.PNG';


const InterestsSection = () => {
    const interestsHeaders = ['Art', 'Sports', 'Space', 'Podcasts', 'Origami', 'Gaming']
    const interestsHeadersLeft = ['Art left-gif', 'Sports left-gif', 'Space left-gif', 'Podcasts left-gif', 'Origami left-gif', 'Gaming left-gif']
    const interestsHeadersRight = ['Art right-gif', 'Sports right-gif', 'Space right-gif', 'Podcasts right-gif', 'Origami right-gif', 'Gaming right-gif']
    const interestsGifs = [Art, Sports, Space, Podcasts, Origami, Gaming]
    const [interestsHeader, setInterestsHeader] = useState(interestsHeaders[0])
    const [interestsGif, setInterestsGif] = useState(interestsGifs[0])
    const [leftGif, setLeftGif] = useState(interestsGifs[0])
    const [rightGif, setRightGif] = useState(interestsGifs[1])
    const [leftArrowheadClassName, setLeftArrowheadClassName] = useState('left-arrowhead-faded')
    const [rightArrowheadClassName, setRightArrowheadClassName] = useState('right-arrowhead')
    const [gifClassName, setGifClassName] = useState(interestsHeaders[0])
    const [leftGifClassName, setLeftGifClassName] = useState('Art left-gif-start')
    const [rightGifClassName, setRightGifClassName] = useState(interestsHeadersRight[1])

    const swipeLeft = () => {
        if (interestsHeader == 'Art'){
            // change the header and gif and the classname of the arrowhead
            setInterestsHeader(interestsHeaders[1])
            setInterestsGif(interestsGifs[1])
            setRightGif(interestsGifs[2])
            setLeftArrowheadClassName('left-arrowhead')
            setGifClassName(interestsHeaders[1])
            setLeftGifClassName(interestsHeadersLeft[0])
            setRightGifClassName(interestsHeadersRight[2])
        }
        else if (interestsHeader == 'Sports'){
            setInterestsHeader(interestsHeaders[2])
            setInterestsGif(interestsGifs[2])
            setLeftGif(interestsGifs[1])
            setRightGif(interestsGifs[3])
            setGifClassName(interestsHeaders[2])
            setLeftGifClassName(interestsHeadersLeft[1])
            setRightGifClassName(interestsHeadersRight[3])
        }
        else if (interestsHeader == 'Space'){
            setInterestsHeader(interestsHeaders[3])
            setInterestsGif(interestsGifs[3])
            setLeftGif(interestsGifs[2])
            setRightGif(interestsGifs[4])
            setGifClassName(interestsHeaders[3])
            setLeftGifClassName(interestsHeadersLeft[2])
            setRightGifClassName(interestsHeadersRight[4])
        }
        else if (interestsHeader == 'Podcasts'){
            setInterestsHeader(interestsHeaders[4])
            setInterestsGif(interestsGifs[4])
            setLeftGif(interestsGifs[3])
            setRightGif(interestsGifs[5])
            setGifClassName(interestsHeaders[4])
            setLeftGifClassName(interestsHeadersLeft[3])
            setRightGifClassName(interestsHeadersRight[5])
        }
        else if (interestsHeader == 'Origami'){
            setInterestsHeader(interestsHeaders[5])
            setInterestsGif(interestsGifs[5])
            setLeftGif(interestsGifs[4])
            setGifClassName(interestsHeaders[5])
            setRightArrowheadClassName('right-arrowhead-faded')
            setLeftGifClassName(interestsHeadersLeft[4])
            setRightGifClassName('Gaming right-gif-end')
        }
    }

    const swipeRight = () => {
        if (interestsHeader == 'Gaming'){
            setInterestsHeader(interestsHeaders[4])
            setInterestsGif(interestsGifs[4])
            setLeftGif(interestsGifs[3])
            setRightGif(interestsGifs[5])
            setRightArrowheadClassName('right-arrowhead')
            setGifClassName(interestsHeaders[4])
            setLeftGifClassName(interestsHeadersLeft[3])
            setRightGifClassName(interestsHeadersRight[5])
        }
        else if (interestsHeader == 'Origami'){
            setInterestsHeader(interestsHeaders[3])
            setInterestsGif(interestsGifs[3])
            setLeftGif(interestsGifs[2])
            setRightGif(interestsGifs[4])
            setGifClassName(interestsHeaders[3])
            setLeftGifClassName(interestsHeadersLeft[2])
            setRightGifClassName(interestsHeadersRight[4])
        }
        else if (interestsHeader == 'Podcasts'){
            setInterestsHeader(interestsHeaders[2])
            setInterestsGif(interestsGifs[2])
            setLeftGif(interestsGifs[1])
            setRightGif(interestsGifs[3])
            setGifClassName(interestsHeaders[2])
            setLeftGifClassName(interestsHeadersLeft[1])
            setRightGifClassName(interestsHeadersRight[3])
        }
        else if (interestsHeader == 'Space'){
            setInterestsHeader(interestsHeaders[1])
            setInterestsGif(interestsGifs[1])
            setLeftGif(interestsGifs[0])
            setRightGif(interestsGifs[2])
            setGifClassName(interestsHeaders[1])
            setLeftGifClassName(interestsHeadersLeft[0])
            setRightGifClassName(interestsHeadersRight[2])
        }
        else if (interestsHeader == 'Sports'){
            setInterestsHeader(interestsHeaders[0])
            setInterestsGif(interestsGifs[0])
            setRightGif(interestsGifs[1])
            setGifClassName(interestsHeaders[0])
            setLeftArrowheadClassName('left-arrowhead-faded')
            setLeftGifClassName('Art left-gif-start')
            setRightGifClassName(interestsHeadersRight[1])
        }
    }

  return (
    <div className='interests-section'>
        <h2 className="interests-section__header">{interestsHeader}</h2>
        <div className="interests-section__gifs-carousel">
            <img src={Arrowhead} alt="left arrowhead" className={leftArrowheadClassName} onClick={swipeRight}/>
            <img src={leftGif} alt="invisible image" className={leftGifClassName}/>
            <img src={interestsGif} alt={interestsHeader} className={gifClassName}/>
            <img src={rightGif} alt="invisible image" className={rightGifClassName}/>
            <img src={Arrowhead} alt="right arrowhead" className={rightArrowheadClassName} onClick={swipeLeft}/>
        </div>
        <img src={Hand} alt="hand reaching out" className="interests-section__hand"/>
    </div>
  )
}

export default InterestsSection