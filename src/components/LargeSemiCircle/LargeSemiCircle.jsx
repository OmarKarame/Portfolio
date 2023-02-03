import './LargeSemiCircle.scss';
import { Link } from 'react-router-dom';

const LargeSemiCircle = ({scrollPercentage}) => {
  const rotateWhiteDecoration = {
    transform: `rotate(${scrollPercentage/14.5}deg)`
  }
  return (
    <div className='large-semi-circle'>
        <div className='semi-circle-outer-ring' style={rotateWhiteDecoration}>
            <div className='white-decoration-outer-ring'>
              <div className='white-curve-outer-ring'></div>
            </div>
        </div>
        <Link to={"/"}>
          <div className='inner-semi-circle'>
          </div>  
        </Link>
    </div>
  )
}

export default LargeSemiCircle