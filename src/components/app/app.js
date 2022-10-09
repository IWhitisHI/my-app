import Intro from "../intro/intro";
import AppSection from "../app-section/app-section";
import StatistickItem from "../statistick-item/statistick-item";
import AppSection1 from "../app-section1/app-section1";
import AppSection2 from "../app-section2/app-section2";
import AppSection3 from "../app-section3/app-section3";

import './app.css'

function App(){
    return (
        <div className='app-main'>
            <Intro/>
            <AppSection/>
            <StatistickItem/>
            <AppSection1/>
            <AppSection2/>
            <AppSection3/>
        </div>
    );
}

export default App;