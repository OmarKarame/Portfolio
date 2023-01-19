import './Nav.scss';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const [navClassName, setNavClassName] = useState('nav');
    const [contactClassName, setContactClassName] = useState('link');
    const [homeClassName, setHomeClassName] = useState('link-selected');
    const [aboutMeClassName, setAboutMeClassName] = useState('link');
    const location = useLocation();
    const changeNavBar = () => {
        if (location.pathname === '/') {
            setNavClassName('nav');
            setHomeClassName('link-selected');
            setContactClassName('link');
            setAboutMeClassName('link');
        }
        else if (location.pathname === '/contact') {
            setNavClassName('nav');
            setHomeClassName('link');
            setContactClassName('link-selected');
            setAboutMeClassName('link');
        }
        else if (location.pathname === '/aboutmeintro' || location.pathname === '/aboutmeinterests' || location.pathname === '/aboutmeprojects' || location.pathname === '/aboutmeskills') {
            setNavClassName('nav-dark');
            setHomeClassName('link-dark');
            setContactClassName('link-dark');
            setAboutMeClassName('link-selected');
        }
    }

    useEffect( () => {
        changeNavBar()
    }, [location.pathname])

  return (
    <div className={navClassName}>
        <div className='nav__links'>
            <Link className={contactClassName} to='/contact' onSelect={changeNavBar}>
                <h6>Contact Me</h6>
            </Link>
            <Link className={homeClassName} to='/' onSelect={changeNavBar}>
                <h6>Home</h6>
            </Link>
            <Link className={aboutMeClassName} to='/aboutmeintro' onSelect={changeNavBar}>
                <h6>About Me</h6>
            </Link>
        </div>
    </div>
  )
}

export default Nav