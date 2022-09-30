import AppHeader from '../app-header/app-header';
import Slider from '../slider/slider';

import './intro'

const Intro = () => {
    return (
        <div className='intro'>
            <AppHeader/>
            <h2>Creative Template</h2>
            <h1>WELCOME TO MOGO</h1>
            <a href='www.google.com'>Learn More</a>
            <p>fgdhghdhgdhdfghdfh</p>
            <p>fgdhghdhgdhdfghdfh</p>
            <p>fgdhghdhgdhdfghdfh</p>
            <p>fgdhghdhgdhdfghdfh</p>
            <p>fgdhghdhgdhdfghdfh</p>
            <p>fgdhghdhgdhdfghdfh</p>
            <Slider/>
        </div>
    );
}

export default Intro;