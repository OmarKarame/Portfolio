import './FreeTypeInput.scss'

const FreeTypeInput = ( { handleFreeTypeValue } ) => { 
  return (
    <div className='free-type-input'>
        <label>Message</label>
        <textarea 
            name="" 
            id="text-area"
            onChange={handleFreeTypeValue}
        >
        </textarea>
    </div>
  )
}

export default FreeTypeInput