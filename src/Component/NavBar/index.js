import React from 'react';
import {Navbar,Icon, Dropdown} from 'react-materialize';
import { NavLink } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi'
import './index.css'

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
    <Dropdown
    className="dropDown"
    id="Dropdown_6"
    options={{
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      container: null,
      coverTrigger: false,
      hover: false,
      inDuration: 150,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 250
    }}
    trigger={<a href="/"> Help <Icon right><RiArrowDropDownLine/></Icon></a>}
  >
    <a href="/call">
    Call
    </a>
    <a href="/ngo-link">
    Help near me
    </a>
  </Dropdown>
        <NavLink to='/team'>Team</NavLink>
        </Navbar>
        
        </div>
    )
};


export default Index;

