import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './app-header.css'



const AppHeader = () => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
      setScroll(window.scrollY);
    };
  
    let classHeader = 'header'
  
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.addEventListener("scroll", handleScroll)
    });

    const setClassHeader = () => {
        if (scroll > 759) {
            return classHeader += ' fixed'
        } else {
            return classHeader
        }
    }

    // const sliderElement = [{
    //     number: '01',
    //     name: 'intro'
    // },
    // {
    //     number: '02',
    //     name: 'work'
    // },
    // {
    //     number: '03',
    //     name: 'about'
    // },
    // {
    //     number: '04',
    //     name: 'contacts'
    // }]
  
    
    return (

        <header id="header" className={setClassHeader()}>
            {/* <div className="header-slider">
                {
                    sliderElement.map((element, index) =>
                        <div className="slider-item" key={index}>
                                <div className="slider-item-progress header-item"></div>
                            <div className="slider-text">
                                <span className="slider-item-number">{element.number}</span><span className="slider-item-text">{element.name}</span>
                            </div>
                        </div>
                    )
                }
            </div> */}
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
                </div>
            </div>
        </header>

    );
}

export default AppHeader;