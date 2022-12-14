import './LargeSemiCircle.scss';
import { Link } from 'react-router-dom';

const LargeSemiCircle = () => {
  return (
    <>
        <div className='semi-circle-outer-ring'></div>
        <Link to={"/"}>
                <div className='inner-semi-circle'></div>
        </Link>
    </>
  )
}

export default LargeSemiCircle