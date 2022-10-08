import './slider.css'

const Slider = () => {
    return (
        <div className='slider-items'>
            <div className="slider-item">
              <div className="slider-item-progress"></div>
              <span className="slider-item-number">01 </span><span className="slider-item-text">INTRO</span>
            </div>
            <div className="slider-item">
              <div className="slider-item-progress"></div>
              <span className="slider-item-number">02 </span><span className="slider-item-text">WORK</span>
            </div>
            <div className="slider-item">
              <div className="slider-item-progress"></div>
              <span className="slider-item-number">03 </span><span className="slider-item-text">ABOUT</span>
            </div>
            <div className="slider-item">
              <div className="slider-item-progress"></div>
              <span className="slider-item-number">04 </span><span className="slider-item-text">CONTACTS</span>
            </div>
        </div>
    );
}

export default Slider;