import blogImg1 from '../../img/blog/1.jpg';
import blogImg2 from '../../img/blog/2.jpg';
import blogImg3 from '../../img/blog/3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCommenting } from '@fortawesome/free-solid-svg-icons'

import './app-section7.css'

const AppSection7 = () => {
    return (

        <section className="section section-8">
            <div className="container">
            <div className="section-header">
                <h3 className="section-suptitle">Our stories</h3>
                <h2 className="section-title">lastest blog</h2>
            </div>
        
            <div className="blog">
        
                <div className="blog-item">
                <div className="post-header">
                    <a href="#a"><img className="post-image" src={blogImg1} alt=""/></a>
                    <div className="post-date"><span>15</span><span>Jan</span></div>
                </div>
                <div className="post-content">
                    <div className="post-title"><a href="#a">Lorem ipsum, dolor sit</a></div>
                    <div className="post-text">Lorem ipsum dolor sit amet consectetur adipisicing, elit. Blanditiis officia, ullam libero.</div>
                </div>
                <div className="post-footer">
                    <span><FontAwesomeIcon className='icon-e' icon={faEye}/>542</span>
                    <span><FontAwesomeIcon className='icon-e' icon={faCommenting}/>17</span>
                </div>
                </div>
        
                <div className="blog-item">
                <div className="post-header">
                    <a href="#a"><img className="post-image" src={blogImg2} alt=""/></a>
                    <div className="post-date"><span>14</span><span>Jan</span></div>
                </div>
                <div className="post-content">
                    <div className="post-title"><a href="#a">Lorem ipsum dolor sit</a></div>
                    <div className="post-text">Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur at recusandae minima.</div>
                </div>
                <div className="post-footer">
                    <span><FontAwesomeIcon className='icon-e' icon={faEye}/>992</span>
                    <span><FontAwesomeIcon className='icon-e' icon={faCommenting}/>42</span>
                </div>
                </div>
        
                <div className="blog-item">
                <div className="post-header">
                    <a href="#a"><img className="post-image" src={blogImg3} alt=""/></a>
                    <div className="post-date"><span>13</span><span>Jan</span></div>
                </div>
                <div className="post-content">
                    <div className="post-title"><a href="#a">Lorem ipsum dolor sit</a></div>
                    <div className="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea recusandae blanditiis nisi?</div>
                </div>
                <div className="post-footer">
                    <span><FontAwesomeIcon className='icon-e' icon={faEye}/>1560</span>
                    <span><FontAwesomeIcon className='icon-e' icon={faCommenting}/>98</span>
                </div>
                </div>
        
            </div>
        
            </div>
        </section>

    );
}

export default AppSection7;