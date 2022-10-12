import AppHeader from "../app-header/app-header";
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
import AppSection6 from "../app-section6/app-section6";
import AppSection7 from "../app-section7/app-section7";
import AppMap from "../app-map/app-section4";
import AppFooter from "../app-footer/app-footer";
import Copyright from "../copyright/copyright";

import './app.css'

function App(){
    return (
        <div className='app-main'>
            <AppHeader/>
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
            <AppSection6/>
            <AppSection7/>
            <AppMap/>
            <AppFooter/>
            <Copyright/>
        </div>
    );
}

export default App;