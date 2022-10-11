import about1Img from '../../img/About/1.jpg'
import about2Img from '../../img/About/2.jpg'
import about3Img from '../../img/About/3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import "./card-img.css"

const CardImg = () => {
    return (
            <div className="container">
        
                <div className="section-header">
                    <h3 className="section-suptitle">What we do</h3>
                    <h2 className="section-title">story about us</h2>
                    <div className="section-text">
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo necessitatibus mollitia suscipit voluptas non placeat blanditiis officiis quod. Delectus id veritatis rerum vel laudantium aspernatur aut velit maxime? Dolor, quidem.
                        </p>
                    </div>
                </div>
        
                <div className="card">
                <div className="card-item">
                    <div className="card-inner">
                    <div className="card-image">
                        <img src={about1Img} alt=""/>
                            <div className="card-text">
                            <FontAwesomeIcon icon={faUser} className='i-u'/><br/>
                            super team
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card-item">
                    <div className="card-inner">
                    <div className="card-image">
                        <img src={about2Img} alt=""/>
                            <div className="card-text">
                            <FontAwesomeIcon icon={faUser} className='i-u'/><br/>
                            super team
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card-item">
                    <div className="card-inner">
                    <div className="card-image">
                        <img src={about3Img} alt=""/>
                        <div className="card-text">
                            <FontAwesomeIcon icon={faUser} className='i-u'/><br/>
                            super team
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        
            </div>
    );
}

export default CardImg;