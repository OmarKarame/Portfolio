import './Home.scss';
import Header from '../../components/Header/Header';
import BackgroundRectangle from '../../components/BackgroundRectangle/BackgroundRectangle';
import SmallCircle from '../../components/SmallCircle/SmallCircle';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
        <Link to={"/contact"}>
            <SmallCircle
                smallCircleClassName={"small-circle-home"}
            />
        </Link>
        <Header
            mainHeader='Hello'
            secondaryHeader="I'm Omar Karame, a Junior Data Scientist in London, England."
            headerClassName={"header-home"}
        />
        <BackgroundRectangle />
    </div>
  )
}

export default Home
