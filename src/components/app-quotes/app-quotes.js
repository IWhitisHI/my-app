import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import imgAvatar from '../../img/avatar.png'

import './app-quotes.css'

const AppQuotes = (props) => {
    
    return (
        <div className={props.number === 0 ? 'quotes' : 'quotes-0' }>
            <div className="container-quotes">
                <div className="slider-btn prev">
                    <i><FontAwesomeIcon icon={faAngleLeft} className='i-a-f'/></i>
                </div>
                <div className="quotes-inner slider-container">
                    <div data-slider="1" className="slider-track">
                        <div className="quotes-item">
                            <img src={imgAvatar} alt="" className="quotes-item-img"/>
                            <div className="quotes-item-text">
                            <p className="quotes-item-quote">
                            "Lorem ipsum dolor sit amet consectetur adipisicing, elit. Quis, pariatur iusto commodi beatae suscipit voluptatum laboriosam unde vitae voluptates nam aliquid aut animi voluptatibus libero et blanditiis."
                            </p>
                            <span className="quotes-item-author">Jon Doe</span>
                        </div>
                        </div>
                        {/* <div className="quotes-item">
                            <img src={imgAvatar} alt="" className="quotes-item-img"/>
                            <div className="quotes-item-text">
                            <p className="quotes-item-quote">
                            "Lorem ipsum dolor sit amet consectetur adipisicing, elit. Quis, pariatur iusto commodi beatae suscipit voluptatum laboriosam unde vitae voluptates nam aliquid aut animi voluptatibus libero et blanditiis."
                            </p>
                            <span className="quotes-item-author">Jacob Doe</span>
                        </div>
                        </div>
                        <div className="quotes-item">
                            <img src={imgAvatar} alt="" className="quotes-item-img"/>
                            <div className="quotes-item-text">
                            <p className="quotes-item-quote">
                            "Lorem ipsum dolor sit amet consectetur adipisicing, elit. Quis, pariatur iusto commodi beatae suscipit voluptatum laboriosam unde vitae voluptates nam aliquid aut animi voluptatibus libero et blanditiis."
                            </p>
                            <span className="quotes-item-author">Joseph Doe</span>
                        </div>
                        </div> */}
                    </div>
                </div>
                <div className="slider-btn next">
                    <i><FontAwesomeIcon icon={faAngleRight} className='i-a-f'/></i>
                </div>
            </div>
      </div>
    );
}

export default AppQuotes;