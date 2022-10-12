import  servImgP  from '../../img/services-img/photography.png';
import  servImgC  from '../../img/services-img/creativity.png';
import  servImgCs  from '../../img/services-img/css-html.png';
import  servImgD  from '../../img/services-img/digital.png';
import  servImgS  from '../../img/services-img/seo.png';
import  servImgW  from '../../img/services-img/webdesign.png';

import './app-section1.css'

const AppSection1 = () => {
    return (
        <section id='services' className='section'>
            <div className='container-s-1'>

                    <div className="section-header">
                        <h3 className="section-suptitle">We work with</h3>
                        <h2 className="section-title">amazing services</h2>
                    </div>

                    <div className="services">
                        <div className="services-item">
                            <img src={servImgP} alt="" className="services-icon"/>
                            <div className="services-title">photography</div>
                            <div className="services-text">Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Odio, dolorum. Odit, possimus.</div>
                        </div>
                        <div className="services-item">
                            <img src={servImgW} alt="" className="services-icon"/>
                            <div className="services-title">web design</div>
                            <div className="services-text">Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Odio, dolorum. Odit, possimus.</div>
                        </div>
                        <div className="services-item">
                            <img src={servImgC} alt="" className="services-icon"/>
                            <div className="services-title">creativity</div>
                            <div className="services-text">Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Odio, dolorum. Odit, possimus.</div>
                        </div>
                        <div className="services-item">
                            <img src={servImgS} alt="" className="services-icon"/>
                            <div className="services-title">seo</div>
                            <div className="services-text">Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Odio, dolorum. Odit, possimus.</div>
                        </div>
                        <div className="services-item">
                            <img src={servImgCs} alt="" className="services-icon"/>
                            <div className="services-title">css/html</div>
                        <div className="services-text">Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Odio, dolorum. Odit, possimus.</div>
                        </div>
                        <div className="services-item">
                            <img src={servImgD} alt="" className="services-icon"/>
                            <div className="services-title">digital</div>
                        <div className="services-text">Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Odio, dolorum. Odit, possimus.</div>
                        </div>
                        <div className="services-line-middle"></div>
                    </div>

            </div>
        </section>
    );
}

export default AppSection1;