import './WhiteButton.scss';


const WhiteButton = ( { handleButtonClick, buttonText } ) => {
  return (
        <button 
            className='white-button'
            onClick={handleButtonClick}
        >
            {buttonText}
        </button>
  )
}

export default WhiteButton