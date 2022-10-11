import Intro from "../intro/intro";
import AppSection from "../app-section/app-section";
import StatistickItem from "../statistick-item/statistick-item";
import AppSection1 from "../app-section1/app-section1";
import AppSection2 from "../app-section2/app-section2";
import AppSection3 from "../app-section3/app-section3";
import AppQuotes from "../app-quotes/app-quotes";
import AppSection4 from "../app-section4/app-section4";
import AppSectionLogs from "../app-section-logs/app-section-logs";
import AppSection5 from "../app-section5/app-section5";

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
            <AppQuotes/>
            <AppSection4/>
            <AppSectionLogs/>
            <AppSection5/>
            <AppQuotes/>
        </div>
    );
}

export default App;