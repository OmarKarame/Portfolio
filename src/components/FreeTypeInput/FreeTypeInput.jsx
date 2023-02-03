import './FreeTypeInput.scss'

const FreeTypeInput = ( { handleFreeTypeValue, name } ) => { 
  return (
    <div className='free-type-input'>
        <label>Message</label>
        <textarea 
            name={name} 
            id="text-area"
            onChange={handleFreeTypeValue}
            required
        >
        </textarea>
    </div>
  )
}

export default FreeTypeInput