import React from 'react';
import {Navbar,Icon} from 'react-materialize';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
// import './index.css'

const Index = () => {
        return (
        <div>
        <Navbar
        alignLinks="right"
        brand={<a className="brand-logo" href="/"><img className="logo" src="/logo.jpg" alt="profile" /></a>}
        id="mobile-nav"
        menuIcon={<Icon><GiHamburgerMenu/></Icon>}
        options={{
                draggable: true,
                edge: 'right',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
                }}
                className="Navbar"
        >
        <NavLink className="home" to='/'>Home</NavLink>
        <NavLink to='/aboutUs'>About Us</NavLink>
        <NavLink to='/ngolink'>Connect with NGOs</NavLink>
        <NavLink to='/team'>Team</NavLink>
        </Navbar>
        
        </div>
    )
};


export default Index;

