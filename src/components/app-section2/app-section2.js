import imgIpad from '../../img/ipad.png';
import imgIphone from '../../img/iphone.png';

import './app-section2.css'

const AppSection2 = () => {
    return (
        <section className="section section1">
            <div className="container">
                <div className="section-header">
                    <h3 className="section-suptitle">For all devices</h3>
                    <h2 className="section-title">unique design</h2>
                </div>
                <div className="devices">
                    <img src={imgIpad} alt="" className="devices-img"/>
                    <img src={imgIphone} alt="" className="devices-img-iphone"/>
                </div>
            </div>
        </section>
    );
}

export default AppSection2;