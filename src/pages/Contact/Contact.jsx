import './Contact.scss';
import SmallCircle from '../../components/SmallCircle/SmallCircle';
import Header from '../../components/Header/Header';
import ShortInput from '../../components/ShortInput/ShortInput';
import FreeTypeInput from '../../components/FreeTypeInput/FreeTypeInput';
import WhiteButton from '../../components/WhiteButton/WhiteButton';
import OrangeButton from '../../components/OrangeButton/OrangeButton';
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <div className='contact'>
        <div className='top-left-black-circle'>
            <Header 
                mainHeader='Contact Me'
                secondaryHeader="Fill in the information below so we can get in touch!"
                headerClassName={"header-contact"}
            />
            <div className='form'>
                <ShortInput 
                    label={"Name"}
                    inputType={"text"}
                />
                <ShortInput 
                    label={"Email"}
                    inputType={"email"}
                />
                <FreeTypeInput />
                <div className='button-section'>
                    <div className='buttons'>
                        <WhiteButton buttonText={"Clear"} />
                        <OrangeButton buttonText={"Submit"} />
                    </div>
                </div>
            </div>
        </div>
        {/* Cancel button */}
        {/* Submit button */}
        <Link to={"/"}>
            <SmallCircle 
                smallCircleClassName={"small-circle-contact"}
            />
        </Link>
    </div>
  )
}

export default Contact