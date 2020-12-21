import React from 'react';
import './index.css';

const Index = () => {
    return (
       <div className="footer">
           <div className="inner-footer">
               <img src="/pearl.png" alt="pearl" />
               
               <div className="footer-box">
                   <h4>CONTACT US</h4>
                   <ul className="block">
                       <li>23434344626</li>
                       <li>23476849900</li>
                   </ul>
               </div>

               <div className="footer-box">
                   <h4>MAIL US @</h4>
                   <ul className="block">
                       <li>pearlsafrica.org.ng</li>
                       <li>MentalHealth@email.com</li> 
                   </ul>
               </div>

               <div className="footer-box">
                   <h4>OUR LOCATION</h4>
                   <ul className="block">
                       <li>55 Moleye Street, off Herbert Macauley,</li>
                       <li> Sabo, Yaba, Lagos</li>
                   </ul>
               </div>

               

           </div>
           
            

       </div>
    )
}

export default Index;