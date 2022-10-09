import Intro from "../intro/intro";
import AppSection from "../app-section/app-section";
import StatistickItem from "../statistick-item/statistick-item";

import './app.css'

function App(){
    return (
        <div className='app-main'>
            <Intro/>
            <AppSection/>
            <StatistickItem/>
        </div>
    );
}

export default App;