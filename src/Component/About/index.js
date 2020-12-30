import React from 'react'
import Footer  from '../Footer/index';
import NavBar from '../NavBar/index'

const Index = () => {
    return (
 <div>
      <NavBar />
     <div className="about-img">
          <img src="picfour.jpg" alt="together" />
     </div>
     <h5><b>"Your mental health is just as important as your physical health. We’re here to share trusted and compassionate information to help you find a happier, more balanced life".
     </b></h5>
     <p>The mind-body connection is real, but that doesn’t mean it’s always easy to understand. When it comes to gaining deeper insights into your mental health and well-being, you need clear, concise information that won’t alarm or intimidate you— information that’s written by medical and behavioral experts who know what they’re talking about and who genuinely care.

It’s our duty and responsibility to help you explore mental health and psychology topics in a way that’s approachable, personal, and stigma-free. We work hard to break down complex health jargon, reflect the latest research, and present the most accurate information in a way that empowers you to take an active role in understanding the way your mind works. 

Verywell Mind answers your mental health questions in the very moments they matter most to you. Just like your physical health, we understand mental health is a journey, so we intend to be your partner along the way, equipping you with the information necessary to make informed and actionable choices.<b>Our mission is simple we help you prioritize your mental health and find balance.</b></p>

<h5><b>LEADERSHIP TEAM</b></h5>
<ul>
    <li><b><a href="#!">Dawodu Oyindamola.</a></b></li>
    <li><b><a href="#!">Adenuga Moyinoluwa.</a></b></li>
    <li><b><a href="#!">Chukwuweike Gift.</a></b></li>
    <li><b><a href="#!">Nwaboku Ifeoma.</a></b></li>
    <li><b><a href="#!">Fatima Vivian Jimoh.</a></b></li>
</ul>
<Footer />
</div>
    )
}

export default Index;