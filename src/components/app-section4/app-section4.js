import teamImg1 from '../../img/team/1.jpg';
import teamImg2 from '../../img/team/2.jpg';
import teamImg3 from '../../img/team/3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

import './app-section4.css'

const AppSection4 = () => {
    const cardElement = [{
                          img:teamImg1,
                          name:'Matthew Dix',
                          profession:'Graphic Design'
                         },
                         {
                          img:teamImg2,
                          name:'Christopher Campbell',
                          profession:'Branding/UX design'
                         }, 
                         {
                          img:teamImg3,
                          name:'Michael Fertig',
                          profession:'Developer'
                        }] 

    return (

        <section className="section">
            <div className="container">
        
                <div className="section-header">
                <h3 className="section-suptitle">Who we are</h3>
                <h2 className="section-title">meet our team</h2>
                <div className="section-text">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo necessitatibus mollitia suscipit voluptas non placeat blanditiis officiis quod. Delectus id veritatis rerum vel laudantium aspernatur aut velit maxime? Dolor, quidem.
                    </p>
                </div>
                </div>
        
                <div className="card">
                {cardElement.map((element, index) =>
                    <div className="card-item" key={index}>
                        <div className="card-inner">
                        <div className="card-image">
                            <img src={element.img} alt=""/>
                            <div className="social-icons card-text">
                            <a className="social-item" href="#A">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </a>
                            <a className="social-item" href="#A">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                            <a className="social-item" href="#A">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                            <a className="social-item" href="#A">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="card-info">
                        <div className="card-info-name">{element.name}</div>
                        <div className="card-info-profession">{element.profession}</div>
                        </div>
                    </div>
                )}

                </div>
            </div>
        </section>

    );
}

export default AppSection4;