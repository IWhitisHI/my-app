import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './app-header.css'

const AppHeader = () => {
    return (
        <div className='app-header'>
            <p>MoGo</p>
            <div>
                <a className='nav__link' href='#about'>ABOUT</a>
                <a className='nav__link' href='#services'>SERVICES</a>
                <a className='nav__link' href='#works'>WORKS</a>
                <a className='nav__link' href='#blog'>BLOG</a>
                <a className='nav__link' href='#contact'>CONTACT</a>
                <button type="button" className='btn btn-link'>
                    <FontAwesomeIcon icon="fa-regular fa-cart-shopping-fast" />
                </button>
                <button type="button" className='btn btn-link'>
                    <i class="bi bi-search"></i>
                </button>
            </div>
        </div>
    );
}

export default AppHeader;