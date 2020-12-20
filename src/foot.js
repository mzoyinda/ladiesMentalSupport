import React from 'react';
import 'materialize-css';
import {Footer} from 'react-materialize';



function Foot(){
    return (
      <Footer
  className="212121 grey darken-4"
  copyrights="&copy 2015 Copyright Text"
  links={<ul><li><a className="white-text
  " href="#!">Lifeline</a></li><li><a className="white-text
  " href="#!">Support</a></li><li><a className="white-text
  " href="#!">NGOs</a></li><li><a className="white-text
  " href="#!">MentalHealth</a></li></ul>}
  
>
  <h5 className="white-text">
    MentalHealthSupport
  </h5>
  <p className="#212121 grey darken-4">
    55 Moleye Street, off Herbert Macauley,
    <p> Sabo, Yaba, Lagos.</p>
  </p>
  <img className="logo" src="pearl-logo.png"></img>
</Footer>
    )
}

export default Foot;