import React from 'react';
import Herosection from '../Herosection/index';
import NavBar from '../NavBar/index';
import Welcome from '../Welcome/index';
import Footer from '../Footer/index';


const Index = () => {
    return (
        <div>
            {/* <Navigation /> 
            <Note /> 
          */}
            <NavBar />
            <Herosection />
            <Welcome />
            <Footer/> 
        </div>
    )
}

export default Index;