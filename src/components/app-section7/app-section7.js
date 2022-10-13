import blogImg1 from '../../img/blog/1.jpg';
import blogImg2 from '../../img/blog/2.jpg';
import blogImg3 from '../../img/blog/3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCommenting } from '@fortawesome/free-solid-svg-icons'

import './app-section7.css'

const AppSection7 = () => {
    const blogElement = [{
                            img: blogImg1,
                            date: 15,
                            views: 542,
                            comments: 17
                        },
                        {
                            img: blogImg2,
                            date: 13,
                            views: 992,
                            comments: 42
                        },
                        {
                            img: blogImg3,
                            date: 13,
                            views: 1560,
                            comments: 98
                        }]

    return (

        <section id='blog' className="section section-8">
            <div className="container">
            <div className="section-header">
                <h3 className="section-suptitle">Our stories</h3>
                <h2 className="section-title">lastest blog</h2>
            </div>
        
            <div className="blog">
                {
                    blogElement.map((element, index) =>
                        <div className="blog-item" key={index}>
                        <div className="post-header">
                            <a href="#a"><img className="post-image" src={element.img} alt=""/></a>
                            <div className="post-date"><span>{element.date}</span><span>Jan</span></div>
                        </div>
                        <div className="post-content">
                            <div className="post-title"><a href="#a">Lorem ipsum, dolor sit</a></div>
                            <div className="post-text">Lorem ipsum dolor sit amet consectetur adipisicing, elit. Blanditiis officia, ullam libero.</div>
                        </div>
                        <div className="post-footer">
                            <span><FontAwesomeIcon className='icon-e' icon={faEye}/>{element.views}</span>
                            <span><FontAwesomeIcon className='icon-e' icon={faCommenting}/>{element.comments}</span>
                        </div>
                        </div>
                    )
                }
        
            </div>
        
            </div>
        </section>

    );
}

export default AppSection7;