import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub, faGoogle, faYoutube, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import blogImg1 from '../../img/blog/1.jpg';
import blogImg2 from '../../img/blog/2.jpg';
import blogImg3 from '../../img/blog/3.jpg';

import instagramImg1 from '../../img/instagram/1.jpg';
import instagramImg2 from '../../img/instagram/2.jpg';
import instagramImg3 from '../../img/instagram/3.jpg';
import instagramImg4 from '../../img/instagram/4.jpg';
import instagramImg5 from '../../img/instagram/5.jpg';
import instagramImg6 from '../../img/instagram/6.jpg';
import instagramImg7 from '../../img/instagram/7.jpg';
import instagramImg8 from '../../img/instagram/8.jpg';
import instagramImg9 from '../../img/instagram/9.jpg';

import './app-footer.css'

const AppFooter = () => {
    const blogElement = [{
                            img: blogImg1,
                            text: 'Lorem ipsum dolor, sit, amet consectetur adipisicing...'
                        },
                        {
                            img: blogImg2,
                            text: 'Lorem ipsum dolor...'
                        },
                        {
                            img: blogImg3,
                            text: 'Lorem ipsum dolor, sit amet...'
                        }],
          instagramElement = [instagramImg1, instagramImg2, instagramImg3, instagramImg4, instagramImg5, instagramImg6, instagramImg7, instagramImg8, instagramImg9]

    return (

        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer__inner">
                <div className="footer__item item-1">
                    <div className="footer__logo">MoGo</div>
                    <div className="footer__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam eos dolor quod modi repellendus cumque optio voluptatum exercitationem accusamus? Corporis, cum, at officia doloribus ea tenetur commodi totam maxime!</div>
                    <div className="footer__stats"><b>15k</b> followers</div>
                    <div className="footer__links">
                    <span className="footer__links-text">Follow Us:</span>
                    <div className="footer__links-container">
                        <a className="footer__links-item" href="#a">
                        <FontAwesomeIcon icon={faFacebookF}/>
                        </a>
                        <a className="footer__links-item" href="#a">
                        <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a className="footer__links-item" href="#a">
                        <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        <a className="footer__links-item" href="#a">
                        <FontAwesomeIcon icon={faPinterestP}/>
                        </a>
                        <a className="footer__links-item" href="#a">
                        <FontAwesomeIcon icon={faGoogle}/>
                        </a>
                        <a className="footer__links-item" href="#a">
                        <FontAwesomeIcon icon={faYoutube}/>
                        </a>
                        <a className="footer__links-item" href="#a">
                        <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        </div>
                    </div>
                    <form action="" method="POST" className="subscribe">
                    <input className="subscribe__input" type="email" name="email" placeholder="Your Email..." required/>
                    <button className="subscribe__btn" type="submit">subscribe</button>
                    </form>
                </div>
                <div className="footer__item item-2">
                    <div className="footer__item-title">blogs</div>
                        <div className="footer__blog">
                            {
                                blogElement.map((element, index) =>
                                    <div className="footer__blog-item" key={index}>
                                        <a href="#a" className="footer__blog-link"><img className="footer__blog-image" src={element.img} alt=""/></a>
                                        <div className="footer__blog-text">
                                        <a className="footer__blog-textlink" href="#a"><p>{element.text}</p></a>
                                        <span>Jan 9, 2016</span>
                                        </div>
                                    </div>
                                )
                            }
                    </div>
                </div>
                <div className="footer__item item-3">
                    <div className="footer__item-title">instagram</div>
                        <div className="footer__instagram">
                            {
                                instagramElement.map((element, index) => 
                                    <a href="#a" className="instagram__item" target="_blank" rel="noopener noreferrer" key={index}>
                                        <img src={element} alt="" className="instagram__item-image"/>
                                    </a>
                                )
                            }
                        </div>
                    <div><a className="instagram-link" href="#a">View more photos</a></div>
                </div>
                </div>
            </div>
        </footer>

    );
}

export default AppFooter;