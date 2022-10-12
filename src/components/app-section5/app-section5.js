import workImg1 from '../../img/works/1.jpg';
import workImg2 from '../../img/works/2.jpg';
import workImg3 from '../../img/works/3.jpg';
import workImg4 from '../../img/works/4.jpg';
import workImg5 from '../../img/works/5.jpg';
import workImg6 from '../../img/works/6.jpg';
import workImg7 from '../../img/works/7.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons'

import './app-section5.css'

const AppSection5 = () => {
    return (

        <section className="section">
            <div className="container">
        
            <div className="section-header">
                <h3 className="section-suptitle">What we do</h3>
                <h2 className="section-title">some of our work</h2>
                <div className="section-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo necessitatibus mollitia suscipit voluptas non placeat blanditiis officiis quod. Delectus id veritatis rerum vel laudantium aspernatur aut velit maxime? Dolor, quidem.
                </p>
                </div>
            </div>
        
            </div>
            <div className="works">
            <div className="works-item">
                <img src={workImg1} alt="" className="works-item-image"/>
                <div className="works-info">
                <FontAwesomeIcon icon={faImage}/>
                <span className="works-info-title">creatively desing</span>
                <p className="works-info-text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
            <div className="works-item">
                <img src={workImg2} alt="" className="works-item-image"/>
                <div className="works-info">
                <FontAwesomeIcon icon={faImage}/>
                <span className="works-info-title">creatively desing</span>
                <p className="works-info-text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
            <div className="works-item">
                <img src={workImg3} alt="" className="works-item-image"/>
                <div className="works-info">
                <FontAwesomeIcon icon={faImage}/>
                <span className="works-info-title">creatively desing</span>
                <p className="works-info-text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
            <div className="works-item">
                <img src={workImg4} alt="" className="works-item-image"/>
                <div className="works-info">
                <FontAwesomeIcon icon={faImage}/>
                <span className="works-info-title">creatively desing</span>
                <p className="works-info-text">Lorem ipsum, dolor, sit amet consectetur adipisicing.</p>
                </div>
            </div>
            <div className="works-item">
                <img src={workImg5} alt="" className="works-item-image"/>
                <div className="works-info">
                <FontAwesomeIcon icon={faImage}/>
                <span className="works-info-title">creatively desing</span>
                <p className="works-info-text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
            <div className="works-item">
                <img src={workImg6} alt="" className="works-item-image"/>
                <div className="works-info">
                <FontAwesomeIcon icon={faImage}/>
                <span className="works-info-title">creatively desing</span>
                <p className="works-info-text">Lorem, ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
            <div className="works-item">
                <img src={workImg7} alt="" className="works-item-image"/>
                <div className="works-info">
                <FontAwesomeIcon icon={faImage}/>
                <span className="works-info-title">creatively desing</span>
                <p className="works-info-text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
            </div>
        </section>

    );
}

export default AppSection5;