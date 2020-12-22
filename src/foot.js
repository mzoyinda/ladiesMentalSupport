import React from 'react'
import {Footer} from 'react-materialize'

const Foot = () =>{
    return(
        <Footer
          className="#212121 grey darken-4"
          copyrights="&#169; 2020 Copyright Text"
          links={<ul><li><a className="grey-text text-lighten-3" href="#!">Home</a></li><li><a className="grey-text text-lighten-3" href="#!">About us</a></li><li><a className="grey-text text-lighten-3" href="#!">Testimonial</a></li><li><a className="grey-text text-lighten-3" href="#!">Contact us</a></li></ul>}
          moreLinks={<a className="grey-text text-lighten-4 right" href="#!">pearlsafrica.org.ng</a>}
          logo="pearl-logo.png" alt="pearls"
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