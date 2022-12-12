import './OrangeButton.scss';

const OrangeButton = ( { handleButtonClick, buttonText } ) => {
    return (
          <button 
              className='orange-button'
              onClick={handleButtonClick}
          >
              {buttonText}
          </button>
    )
  }

export default OrangeButton