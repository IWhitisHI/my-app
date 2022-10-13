import logoImg1 from '../../img/logos/1.png';
import logoImg2 from '../../img/logos/2.png';
import logoImg3 from '../../img/logos/3.png';
import logoImg4 from '../../img/logos/4.png';
import logoImg5 from '../../img/logos/5.png';
import logoImg6 from '../../img/logos/6.png';

import './app-section-logs.css'

const AppSectionLogs = () => {
    const logoElement = [logoImg1, logoImg2, logoImg3, logoImg4, logoImg5, logoImg6]
    return (

        <div className="section section-logos">
            <div className="container">
            <div className="logos">
                {
                    logoElement.map((element, index) => <div className="logos-item" key={index}><img src={element} alt=""/></div>)
                }
            </div>
            </div>
        </div>

    );
}

export default AppSectionLogs;