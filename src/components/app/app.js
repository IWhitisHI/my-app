import Intro from "../intro/intro";
import AppSection from "../app-section/app-section";
import StatistickItem from "../statistick-item/statistick-item";
import AppSection1 from "../app-section1/app-section1";

import './app.css'

function App(){
    return (
        <div className='app-main'>
            <Intro/>
            <AppSection/>
            <StatistickItem/>
            <AppSection1/>
        </div>
    );
}

export default App;