import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons'

import './app-map.css'

const AppMap = () => {
    return (

        <div className="map">
        <div className="layout--grey">
          <FontAwesomeIcon icon={faMap}/>
          <a className='a-map' href="https://goo.gl/maps/1SMwXeNcyJKcXqzYA" target="_blank" rel="noopener noreferrer">Open map</a>
          <div className="redline"></div>
        </div>
      </div>

    );
}

export default AppMap;