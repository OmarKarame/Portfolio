import './SkillsSection.scss';
import { useState } from 'react';
import Html from '../../styles/images/html.png';
import Css from '../../styles/images/css.png';
import Typescript from '../../styles/images/typescript.png';
import Python from '../../styles/images/python.png';
import Javascript from '../../styles/images/javascript.png';
import ReactLogo from '../../styles/images/react.png';
import Paradigm from '../../styles/images/paradigm.png';
import Springboot from '../../styles/images/springboot.png';
import Procreate from '../../styles/images/procreate.png';
import Figma from '../../styles/images/figma.png';
import Sass from '../../styles/images/scss.png';
import Pedestal from '../../styles/images/pedestal.png';
import Java from '../../styles/images/java.png';
import Hadoop from '../../styles/images/hadoop.png';
import Mysql from '../../styles/images/mysql.png';
import Arrowhead from '../../styles/images/arrowhead.PNG';
import ScikitLearn from '../../styles/images/scikit-learn.png';
import TensorFlow from '../../styles/images/Tensor-flow.png';
import Docker from '../../styles/images/docker.png';

const SkillsSection = () => {

  const skillsHeaders = ['HTML', 'CSS', 'SASS', 'TypeScript', 'JavaScript', 'React', 'Java', 'Python', 'Visual Paradigm', 'MySQL', 'Springboot', 'Hadoop', 'Docker', 'Scikit-Learn', 'Tensor Flow', 'Procreate', 'Figma'];
  const skillsGifs = [Html, Css, Sass, Typescript, Javascript, ReactLogo, Java, Python, Paradigm, Mysql, Springboot, Hadoop, Docker, ScikitLearn, TensorFlow, Procreate, Figma];
  const [skillsHeader, setSkillsHeader] = useState(skillsHeaders[0]);
  const [skillsGif, setSkillsGif] = useState(skillsGifs[0]);

  const [skillsGifClassName, setSkillsGifClassName] = useState(skillsHeaders[0]);

  const [leftArrowheadClassName, setLeftArrowheadClassName] = useState('left-arrowhead-faded');
  const [rightArrowheadClassName, setRightArrowheadClassName] = useState('right-arrowhead');

  const swipeLeft = () => {
    if (skillsHeader == 'HTML'){
        setSkillsHeader(skillsHeaders[1]);
        setSkillsGif(skillsGifs[1]);
        setLeftArrowheadClassName('left-arrowhead');
        setSkillsGifClassName(skillsHeaders[1]);
    }

    else if (skillsHeader == 'CSS'){
        setSkillsHeader(skillsHeaders[2])
        setSkillsGif(skillsGifs[2])
        setSkillsGifClassName(skillsHeaders[2])
    }

    else if (skillsHeader == 'SASS'){
        setSkillsHeader(skillsHeaders[3])
        setSkillsGif(skillsGifs[3])
        setSkillsGifClassName(skillsHeaders[3])
    }

    else if (skillsHeader == 'TypeScript'){
        setSkillsHeader(skillsHeaders[4])
        setSkillsGif(skillsGifs[4])
        setSkillsGifClassName(skillsHeaders[4])
    }

    else if (skillsHeader == 'JavaScript'){
        setSkillsHeader(skillsHeaders[5])
        setSkillsGif(skillsGifs[5])
        setSkillsGifClassName(skillsHeaders[5])
    }

    else if (skillsHeader == 'React'){
        setSkillsHeader(skillsHeaders[6])
        setSkillsGif(skillsGifs[6])
        setSkillsGifClassName(skillsHeaders[6])
    }

    else if (skillsHeader == 'Java'){
        setSkillsHeader(skillsHeaders[7])
        setSkillsGif(skillsGifs[7])
        setSkillsGifClassName(skillsHeaders[7])
    }

    else if (skillsHeader == 'Python'){
        setSkillsHeader(skillsHeaders[8])
        setSkillsGif(skillsGifs[8])
        setSkillsGifClassName("visual-paradigm")
    }

    else if (skillsHeader == 'Visual Paradigm'){
        setSkillsHeader(skillsHeaders[9])
        setSkillsGif(skillsGifs[9])
        setSkillsGifClassName(skillsHeaders[9])
    }

    else if (skillsHeader == 'MySQL'){
        setSkillsHeader(skillsHeaders[10])
        setSkillsGif(skillsGifs[10])
        setSkillsGifClassName(skillsHeaders[10])
    }

    else if (skillsHeader == 'Springboot'){
        setSkillsHeader(skillsHeaders[11])
        setSkillsGif(skillsGifs[11])
        setSkillsGifClassName(skillsHeaders[11])
    }

    else if (skillsHeader == 'Hadoop'){
        setSkillsHeader(skillsHeaders[12])
        setSkillsGif(skillsGifs[12])
        setSkillsGifClassName(skillsHeaders[12])
    }
    else if (skillsHeader == 'Docker'){
      setSkillsHeader(skillsHeaders[13])
      setSkillsGif(skillsGifs[13])
      setSkillsGifClassName(skillsHeaders[13])
    }
    else if (skillsHeader == 'Scikit-Learn'){
        setSkillsHeader(skillsHeaders[14])
        setSkillsGif(skillsGifs[14])
        setSkillsGifClassName(skillsHeaders[14])
        setSkillsGifClassName("Tensor-Flow")
    }
    else if (skillsHeader == 'Tensor Flow'){
      setSkillsHeader(skillsHeaders[15])
      setSkillsGif(skillsGifs[15])
      setSkillsGifClassName(skillsHeaders[15])
  }
    else if (skillsHeader == 'Procreate'){
      setSkillsHeader(skillsHeaders[16])
      setSkillsGif(skillsGifs[16])
      setSkillsGifClassName(skillsHeaders[16])
      setRightArrowheadClassName('right-arrowhead-faded')
  }
}

const swipeRight = () => {
    if (skillsHeader == 'Figma'){
        setSkillsHeader(skillsHeaders[15])
        setSkillsGif(skillsGifs[15])
        setSkillsGifClassName(skillsHeaders[15])
        setRightArrowheadClassName('right-arrowhead')
    }
    else if (skillsHeader == 'Procreate'){
        setSkillsHeader(skillsHeaders[14])
        setSkillsGif(skillsGifs[14])
        setSkillsGifClassName(skillsHeaders[14])
        setSkillsGifClassName("Tensor-Flow")
    }
    else if (skillsHeader == 'Tensor Flow'){
      setSkillsHeader(skillsHeaders[13])
      setSkillsGif(skillsGifs[13])
      setSkillsGifClassName(skillsHeaders[13])
    }
    else if (skillsHeader == 'Scikit-Learn'){
      setSkillsHeader(skillsHeaders[12])
      setSkillsGif(skillsGifs[12])
      setSkillsGifClassName(skillsHeaders[12])
    }
    else if (skillsHeader == 'Docker'){
      setSkillsHeader(skillsHeaders[11])
      setSkillsGif(skillsGifs[11])
      setSkillsGifClassName(skillsHeaders[11])
    }
    else if (skillsHeader == 'Hadoop'){
        setSkillsHeader(skillsHeaders[10])
        setSkillsGif(skillsGifs[10])
        setSkillsGifClassName(skillsHeaders[10])
    }
    else if (skillsHeader == 'Springboot'){
        setSkillsHeader(skillsHeaders[9])
        setSkillsGif(skillsGifs[9])
        setSkillsGifClassName(skillsHeaders[9])
    }
    else if (skillsHeader == 'MySQL'){
        setSkillsHeader(skillsHeaders[8])
        setSkillsGif(skillsGifs[8])
        setSkillsGifClassName("visual-paradigm")
    }
    else if (skillsHeader == 'Visual Paradigm'){
        setSkillsHeader(skillsHeaders[7])
        setSkillsGif(skillsGifs[7])
        setSkillsGifClassName(skillsHeaders[7])
    }
    else if (skillsHeader == 'Python'){
        setSkillsHeader(skillsHeaders[6])
        setSkillsGif(skillsGifs[6])
        setSkillsGifClassName(skillsHeaders[6])
    }
    else if (skillsHeader == 'Java'){
        setSkillsHeader(skillsHeaders[5])
        setSkillsGif(skillsGifs[5])
        setSkillsGifClassName(skillsHeaders[5])
    }
    else if (skillsHeader == 'React'){
        setSkillsHeader(skillsHeaders[4])
        setSkillsGif(skillsGifs[4])
        setSkillsGifClassName(skillsHeaders[4])
    }
    else if (skillsHeader == 'JavaScript'){
        setSkillsHeader(skillsHeaders[3])
        setSkillsGif(skillsGifs[3])
        setSkillsGifClassName(skillsHeaders[3])
    }
    else if (skillsHeader == 'TypeScript'){
        setSkillsHeader(skillsHeaders[2])
        setSkillsGif(skillsGifs[2])
        setSkillsGifClassName(skillsHeaders[2])
    }
    else if (skillsHeader == 'SASS'){
        setSkillsHeader(skillsHeaders[1])
        setSkillsGif(skillsGifs[1])
        setSkillsGifClassName(skillsHeaders[1])
    }
    else if (skillsHeader == 'CSS'){
        setSkillsHeader(skillsHeaders[0])
        setSkillsGif(skillsGifs[0])
        setSkillsGifClassName(skillsHeaders[0])
        setLeftArrowheadClassName('left-arrowhead-faded');
    }
    else if (skillsHeader == 'HTML'){
        setSkillsHeader(skillsHeaders[0]);
        setSkillsGif(skillsGifs[0]);
        setSkillsGifClassName(skillsHeaders[0]);
    }
}


  return (
    <div className='skills-section'>
        <h3 className="skills-section__header">{skillsHeader}</h3>
        <div className="skills-section__gifs-carousel">
            <img src={Arrowhead} alt="left arrowhead" className={leftArrowheadClassName} onClick={swipeRight}/>
            <img src={skillsGif} alt={skillsHeader} className={skillsGifClassName}/>
            <img src={Arrowhead} alt="right arrowhead" className={rightArrowheadClassName} onClick={swipeLeft}/>
        </div>
        <img src={Pedestal} alt="pedestal" className="skills-section__pedestal"/>
    </div>
  )
}

export default SkillsSection
