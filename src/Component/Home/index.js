import React from 'react';
import Herosection from '../Herosection/index';
import NavBar from '../NavBar/index';
import Welcome from '../Welcome/index';
import Note from '../Note/index';
import Helpline from '../Helpline/index'
import Footer from '../Footer/index';


const Index = () => {
    return (
        <div>
            <NavBar />
            <Herosection />
            <Welcome />
            <Note />
            <Helpline />
            <Footer/> 
        </div>
    )
}

export default Index;