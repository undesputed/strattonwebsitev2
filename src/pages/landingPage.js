import React from 'react';

import Banner from "../components/banner";
import PublishNow from "../components/publishNow";
import LearnMore from "../components/learnMore";
import Awards from "../components/awards";
import Spotlight from "../components/spotlight";

class landingPage extends React.Component{
    render(){
        return(
            <div>
                <Banner/>
                <PublishNow/>
                <LearnMore/>
                <Awards/>
                <Spotlight/>
            </div>
        )
    }
}

export default landingPage;