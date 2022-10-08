import AppHeader from '../app-header/app-header';
import Slider from '../slider/slider';

import './intro.css'

const Intro = () => {
    return (
        <div className='intro'>
            <AppHeader/>
            <div className='container'>
                <div className='intro-inner'>
                    <h2 className='intro-suptitle'>Creative Template</h2>
                    <h1 className='intro-title'>WELCOME TO MOGO</h1>
                    <a href='#dsafsda' className='intro-href'>Learn More</a>
                </div>
            </div>
            <Slider/>
        </div>
    );
}

export default Intro;