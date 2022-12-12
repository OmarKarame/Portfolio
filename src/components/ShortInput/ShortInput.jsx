import './ShortInput.scss';


const ShortInput = ( { label, inputType, handleShortInput }) => {
  return (
    <div className='short-input'>
        <label>{label}</label>
        <input type={inputType} onChange={handleShortInput}/>
    </div>
  )
}

export default ShortInput