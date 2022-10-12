import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

import './copyright.css'

const Copyright = () => {
    return (

        <div className="copyright">
            <div className="container">
            <div className="copyright-inner">
                <FontAwesomeIcon icon={faCopyright}/> 2016 MoGo free PSD template by <span>Laaqiq</span>
            </div>
            </div>
        </div>

    );
}

export default Copyright;