import logoImg1 from '../../img/logos/1.png';
import logoImg2 from '../../img/logos/2.png';
import logoImg3 from '../../img/logos/3.png';
import logoImg4 from '../../img/logos/4.png';
import logoImg5 from '../../img/logos/5.png';
import logoImg6 from '../../img/logos/6.png';

import './app-section-logs.css'

const AppSectionLogs = () => {
    return (

        <div class="section section-logos">
            <div class="container">
            <div class="logos">
                <div class="logos-item"><img src={logoImg1} alt=""/></div>
                <div class="logos-item"><img src={logoImg2} alt=""/></div>
                <div class="logos-item"><img src={logoImg3} alt=""/></div>
                <div class="logos-item"><img src={logoImg4} alt=""/></div>
                <div class="logos-item"><img src={logoImg5} alt=""/></div>
                <div class="logos-item"><img src={logoImg6} alt=""/></div>
            </div>
            </div>
        </div>

    );
}

export default AppSectionLogs;