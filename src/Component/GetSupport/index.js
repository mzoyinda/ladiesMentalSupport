import React from 'react';
import NavBar from '../NavBar/index';
import Footer from '../Footer/index';
import Depression from '../MentalHealth/depression';
import Drugs from '../MentalHealth/drug';
import Rape from '../MentalHealth/rape';
import Relationship from '../MentalHealth/relationship';
import Learning from '../MentalHealth/learning';
import General from '../MentalHealth/general';

const Index = () => {
    return (
        <div>
            <NavBar/>
            <div className="topSection">
                <h3 className="ngoHeader">Get connected to a mental health support near you by clicking any of the links below..</h3>
                <General/>
                <Depression />
                <Rape />
                <Relationship />
                <Drugs />
                <Learning/>
            </div>
            <Footer/>
        </div>
    ) 
}

export default Index;