import './OrangeButton.scss';

const OrangeButton = ( { handleButtonClick, buttonText, value } ) => {
    return (
          <button 
              className='orange-button'
              onClick={handleButtonClick}
              value={value}
          >
              {buttonText}
          </button>
    )
  }

export default OrangeButton