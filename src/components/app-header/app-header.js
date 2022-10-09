import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './app-header.css'


const AppHeader = () => {
    return (
        <div className='app-header-main'>
            <div>MoGo</div>
            <div className='main-link'>
                <a className='nav-link' href='#about'>ABOUT</a>
                <a className='nav-link' href='#services'>SERVICES</a>
                <a className='nav-link' href='#works'>WORKS</a>
                <a className='nav-link' href='#blog'>BLOG</a>
                <a className='nav-link' href='#contact'>CONTACT</a>
                <button type="button" href="#button" className='m'>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                </button>
                <button type="button" href="#button" className='m'>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>
        </div>
    );
}

export default AppHeader;