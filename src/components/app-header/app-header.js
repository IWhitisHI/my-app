import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './app-header.css'



const AppHeader = () => {
    return (

        <header id="header" className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="header-logo">MoGo</div>
                    <nav id="header-nav" className="header-nav">
                    <a className="nav-link" href="#about">about</a>
                    <a className="nav-link" href="#services">service</a>
                    <a className="nav-link" href="#works">work</a>
                    <a className="nav-link" href="#blog">blog</a>
                    <a className="nav-link" href="#contact">contact</a>
                    <button type="button" className="nav-link btn-nav" href="#"><FontAwesomeIcon icon={faShoppingCart}/></button>
                    <button type="button" href="#" className="nav-link btn-nav"><FontAwesomeIcon icon={faSearch}/></button>
                    </nav>
            
                    <button id="burger-container" type="button" className="nav-toggle">
                    <span className="nav-toggle-item">Menu</span>
                    </button>
                </div>
            </div>
        </header>

    );
}

export default AppHeader;