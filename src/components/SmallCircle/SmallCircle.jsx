import './SmallCircle.scss';

const SmallCircle = ({ smallCircleClassName }) => {
  return (
    <>
        <div className={smallCircleClassName}>
            <div className='home-display'>
                <h5>
                    <span className="char1">C</span>
                    <span className="char2">o</span>
                    <span className="char3">n</span>
                    <span className="char4">t</span>
                    <span className="char5">a</span>
                    <span className="char6">c</span>
                    <span className="char7">t</span>
                    <span className="char8"> </span>
                    <span className="char9">M</span>
                    <span className="char10">e</span>
                </h5>
            </div>
            <div className='contact-display'>
                <h5>
                    <span className="char1">H</span>
                    <span className="char2">o</span>
                    <span className="char3">m</span>
                    <span className="char4">e</span>
                </h5>
            </div>
            <div className='outer-ring'>
                <div className='black-circle'>
                    <div className='white-circle'>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SmallCircle