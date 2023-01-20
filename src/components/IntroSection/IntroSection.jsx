import './IntroSection.scss';
import VexRobotics from '../../styles/images/vex-robotics.png';
import QueenMary from '../../styles/images/queen-mary.png';
import Nology from '../../styles/images/nology.png';

const IntroSection = ({handleScroll}) => {
  return (
      <div className='intro-section' onScroll={handleScroll}>
        <div>
          <div className='content-section'>
            <img src={VexRobotics} alt="Vex Robotics Logo" className='vex-robotics'/>
            <h4 className='vex-robotics-paragraph'>
                The first time I was introduced to programming was during my final year at school in Lebanon. During that time, I was selected from my class to represent my school (LWIS - Universal School of Lebanon) in the national Vex Robotics competetion. My role in the team was to program the robots movement which could alternate between moving autonomously or by the controller’s input.
            </h4>
          </div>
          <div className='content-section'>
            <img src={QueenMary} alt="Queen Mary University of London Logo" className='queen-mary'/>
            <h4 className='queen-mary-paragraph'>
                After graduating from school, I moved to London to study computer science at Queen Mary University of London. During my time at university, I learned a lot computing and programming theory. This degree helped enhance my knowledge on computers and provided me with an introduction into programming.
            </h4>
          </div>
          <div className='content-section'>
            <img src={Nology} alt="_nology Logo" className='nology' />
            <h4 className='nology-paragraph'>
                After graduating from school, I moved to London to study computer science at Queen Mary University of London. During my time at university, I learned a lot computing and programming theory. This degree helped enhance my knowledge on computers and provided me with an introduction into programming.
            </h4>
          </div>
        </div>
      </div>
  )
}

export default IntroSection
