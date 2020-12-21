import React from 'react';
// import Navigation from '../Navigation/index';
//  import Note from '../Note/index';
// import Footer from '../Footer/index';
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