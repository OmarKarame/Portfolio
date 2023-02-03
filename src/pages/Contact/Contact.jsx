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
                <form action="https://public.herotofu.com/v1/5557f770-9e3f-11ed-82c7-3d7607318e65" method="post">
                    <ShortInput 
                        label={"Name"}
                        inputType={"text"}
                        name={"name"}
                    />
                    <ShortInput 
                        label={"Email"}
                        inputType={"email"}
                        name={"email"}
                    />
                    <FreeTypeInput 
                        name={"message"}
                    />
                    <div className='button-section'>
                        <div className='buttons'>
                            <WhiteButton buttonText={"Clear"} />
                            <OrangeButton buttonText={"Submit"} type={"submit"} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Link to={"/"}>
            <SmallCircle 
                smallCircleClassName={"small-circle-contact"}
            />
        </Link>
    </div>
  )
}

export default Contact