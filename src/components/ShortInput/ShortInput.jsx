import './ShortInput.scss';


const ShortInput = ( { label, inputType, handleShortInput, name }) => {
  return (
    <div className='short-input'>
        <label>{label}</label>
        <input type={inputType} onChange={handleShortInput} name={name} required/>
    </div>
  )
}

export default ShortInput