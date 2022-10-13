
import './intro.css'

const Intro = () => {
    const sliderElement = [{
                                number: '01',
                                name: 'intro'
                            },
                            {
                                number: '02',
                                name: 'work'
                            },
                            {
                                number: '03',
                                name: 'about'
                            },
                            {
                                number: '04',
                                name: 'contacts'
                            }]

    return (

        <div id="intro" className="intro">
            <div className="container">
                <div className="intro-inner">
                <h2 className="intro-suptitle">Creative Template</h2>
                <h1 className="intro-title">Welcome to mogo</h1>
                <a className="btn intro-btn" href="#a">Learn More</a>
                </div>
            </div>
            <div className="slider">
                <div className="container">
                <div className="slider-inner">
                    {
                        sliderElement.map((element, index) =>
                            <div className="slider-item" key={index}>
                            <div className="slider-item-progress active"></div>
                            <span className="slider-item-number">{element.number}</span><span className="slider-item-text">{element.name}</span>
                            </div>
                        )
                    }
                    {/* <div className="slider-item">
                    <div className="slider-item-progress active"></div>
                    <span className="slider-item-number">01</span><span className="slider-item-text">intro</span>
                    </div>
                    <div className="slider-item">
                    <div className="slider-item-progress"></div>
                    <span className="slider-item-number">02</span><span className="slider-item-text">work</span>
                    </div>
                    <div className="slider-item">
                    <div className="slider-item-progress"></div>
                    <span className="slider-item-number">03</span><span className="slider-item-text">about</span>
                    </div>
                    <div className="slider-item">
                    <div className="slider-item-progress"></div>
                    <span className="slider-item-number">04</span><span className="slider-item-text">contacts</span>
                    </div> */}
                </div>
                </div>
            </div>
        </div>
        
    );
}

export default Intro;