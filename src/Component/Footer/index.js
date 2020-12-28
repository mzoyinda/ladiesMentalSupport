import React from 'react';
import { Footer } from 'react-materialize'

const Foot = () =>{
    return(
        <Footer
          className="#212121 grey darken-4"
          copyrights="&#169; ladies mental support 2020"
            links={<ul>
                <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">About us</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Our Team</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Contact us</a></li>
            </ul>}
            moreLinks={<a className="grey-text text-lighten-4 right" href="https://pearlsafrica.org/"><img src="pearls.png" alt="pearls africa logo" className="pearlsLogo"/>Pearls Africa</a>}
         >
          <div className="container">
            <div className="row">
              <div className="col s12 m16">
                <h5>LadiesMentalSupport</h5>
                <p>Our vision is to provide culturally competent, 
                  holistic, and wellness focused services that 
                  prevents mental health challenges</p>
                
              </div>
            </div>
          </div>
          
        </Footer>
    )
}
export default Foot;