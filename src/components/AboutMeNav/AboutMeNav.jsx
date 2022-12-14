import './AboutMeNav.scss';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AboutMeNav = () => {
    const [introClassName, setIntroClassName] = useState('intro-selected');
    const [skillsClassName, setSkillsClassName] = useState('skills');
    const [projectsClassName, setProjectsClassName] = useState('projects');
    const [interestsClassName, setInterestsClassName] = useState('interests');
    const location = useLocation();

    const changeAboutMeNav = () => {
        if (location.pathname === '/aboutmeintro') {
            setIntroClassName('intro-selected');
            setSkillsClassName('skills');
            setProjectsClassName('projects');
            setInterestsClassName('interests');
        }
        else if (location.pathname === '/aboutmeskills') {
            setIntroClassName('intro');
            setSkillsClassName('skills-selected');
            setProjectsClassName('projects');
            setInterestsClassName('interests');
        }
        else if (location.pathname === '/aboutmeprojects') {
            setIntroClassName('intro');
            setSkillsClassName('skills');
            setProjectsClassName('projects-selected');
            setInterestsClassName('interests');
        }
        else if (location.pathname === '/aboutmeinterests') {
            setIntroClassName('intro');
            setSkillsClassName('skills');
            setProjectsClassName('projects');
            setInterestsClassName('interests-selected');
        }
    }

    useEffect( () => {
        changeAboutMeNav()
    }, [location.pathname])

  return (
    <div className='about-me-nav'>
        <Link to={"/aboutmeintro"}>
            <h6 className={introClassName} onClick={changeAboutMeNav}>Intro</h6>
        </Link>
        <Link to={"/aboutmeskills"}>
            <h6 className={skillsClassName} onClick={changeAboutMeNav}>Skills</h6>
        </Link>
        <Link to={"/aboutmeprojects"}>
            <h6 className={projectsClassName} onClick={changeAboutMeNav}>Projects</h6>
        </Link>
        <Link to={"/aboutmeinterests"}>
            <h6 className={interestsClassName} onClick={changeAboutMeNav}>Interests</h6>
        </Link>
    </div>
  )
}

export default AboutMeNav