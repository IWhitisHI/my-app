import  servImgP  from '../../img/services-img/photography.png';
import  servImgC  from '../../img/services-img/creativity.png';
import  servImgCs  from '../../img/services-img/css-html.png';
import  servImgD  from '../../img/services-img/digital.png';
import  servImgS  from '../../img/services-img/seo.png';
import  servImgW  from '../../img/services-img/webdesign.png';

import './app-section1.css'

const AppSection1 = () => {
    const servicesElement = [{img:servImgP, suptitle:'photography'},
                             {img:servImgW, suptitle:'web design'},
                             {img:servImgC, suptitle:'creativity'},
                             {img:servImgS, suptitle:'seo'},
                             {img:servImgCs, suptitle:'css/html'},
                             {img:servImgD, suptitle:'digital'}]

    return (
        <section id='services' className='section'>
            <div className='container-s-1'>

                    <div className="section-header">
                        <h3 className="section-suptitle">We work with</h3>
                        <h2 className="section-title">amazing services</h2>
                    </div>

                    <div className="services">
                        {servicesElement.map((element, index) =>
                            <div className="services-item" key={index}>
                                <img src={element.img} alt="" className="services-icon"/>
                                <div className="services-title">{element.suptitle}</div>
                                <div className="services-text">Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Odio, dolorum. Odit, possimus.</div>
                            </div>
                        )}
                        <div className="services-line-middle"></div>
                    </div>

            </div>
        </section>
    );
}

export default AppSection1;