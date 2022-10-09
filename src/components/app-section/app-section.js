import CardImg from '../card-img/card-img';

import './app-section.css'

const AppSection = () => {
    return (
        <div className='section1'>
            <h3 className="section-suptitle">What we do</h3>
            <h2 className="section-title">story about us</h2>
            <div className="section-text">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo necessitatibus mollitia suscipit voluptas non placeat blanditiis officiis quod. Delectus id veritatis rerum vel laudantium aspernatur aut velit maxime? Dolor, quidem.
                </p>
            </div>
            <CardImg/>
        </div>
    );
}

export default AppSection;