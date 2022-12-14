import './BackgroundRectangle.scss';
import omar from '../../styles/images/omar.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BackgroundRectangle = () => {
    const [isRotatingClass, setIsRotatingClass] = useState('decoration');
    const [displayPageName, setDisplayPageName] = useState('page-name');
  return (
    <div className='background-rectangle'>
        <div className='large-circle-home-page'>
            <div className={isRotatingClass}>
                <div className='black-decoration'>
                    <div className='black-curve'></div>
                </div>
                <div className='white-decoration'>
                    <div className='white-curve'></div>
                </div>
            </div>
            <div className='inner-circle'>
            </div>
            <Link to={"/aboutmeintro"}>
                <img 
                    src={omar}
                    alt="Omar Karame" 
                    onMouseEnter={() => {
                            setIsRotatingClass("rotating-decoration")
                            setDisplayPageName("page-name-displayed")
                        }}
                        onMouseLeave={() => {
                            setIsRotatingClass('decoration')
                            setDisplayPageName('page-name')
                        }
                    }
                />
            </Link>
            <div className={displayPageName}>
                <h2>
                    <span className="char1">A</span>
                    <span className="char2">b</span>
                    <span className="char3">o</span>
                    <span className="char4">u</span>
                    <span className="char5">t</span>
                    <span className="char6"> </span>
                    <span className="char7">M</span>
                    <span className="char8">e</span>
                </h2>
            </div>
        </div>
    </div>
  )
}

export default BackgroundRectangle