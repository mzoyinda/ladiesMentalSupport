import React from 'react';
import Collapsible from '../Collapsible/index';
import Card from '../Card/index';

const Index = () => {
    return (
        <div>
            <Collapsible header="Depression, Suicidal thoughts/behaviours">
                    <Card image="/mhf.jpg" link="https://www.mhinnovation.net/organisations/mental-health-foundation-nigeria"> 
                        <h5><b>Mental Health Foundation Nigeria</b></h5>
                        <p>Mental Health Foundation Nigeria is a non-governmental organization and a social enterprise which seek to provide practical intervention and services in pursuit of wellness through mental health policy reforms, advocacy, research, training, rehabilitation and care.</p>
                        <p><b>Location: </b>16 Harvey Road, Yaba, Lagos State</p>
                </Card>
                <Card image="/gede.png" link="http://www.gedefoundation.org/"> 
                        <h5><b>GEDE Foundation</b></h5>
                        <p>Gede works with those who suffer from underserved and stigmatized health burdens to achieve long term positive change at the community level through high quality research (often into prevalence and impact), catalytic partnerships and advocacy.</p>
                        <p><b>Location: </b>No. 13 Danube Street, Maitama, Abuja AND No. 97 Goldie Street,Calabar South, Cross River State</p>
                </Card>
                <Card image="/CCHD.png" link="https://www.cchdnigeria.org/"> 
                        <h5><b>The Centre for Corrections and Human Development (CCHD)</b></h5>
                        <p>The Centre for Corrections and Human Development (CCHD) is a non- governmental organization dedicated to the promotion and enhancement of quality of life, the re-establishment and development of human personality through counseling, mentoring, rehabilitation, education and empowerment of deserving but less privileged or disoriented Youths and young persons in Nigeria.</p>
                        <p><b>Location: </b>39 Bode Thomas Street, Surulere, Lagos, Nigeria</p>
                    </Card>
                    <Card image="/CEMHRI.jpg" link="www.cemhri.org"> 
                        <h5><b>Centre for Mental Health Research and Initiative (CEMHRI)</b></h5>
                        <p>The Centre for Mental Health Research and Initiative (CEMHRI) is a non-profit organization that is dedicated to promoting mental health awareness and eliminating the stigmas that is associated with mental illnesses through service and research. We strive to motivate, involve, and educate the general public about mental health in order to help those suffering from mental health issues to find out how and where to acquire assistance.</p>
                        <p><b>Location: </b>3rd Floor, Glass House, 1-5, Oba Akinjobu Way, Ikeja Lagos, Nigeria</p>
                    </Card>
                    <Card image="/Mental.png" link="https://mentalcare.life/"> 
                        <h5><b>The Mental Care Foundation</b></h5>
                        <p>The Mental Care Foundation brings together, technology and emotional support to give mental health a voice in Nigeria, where depression is seen as a “white man” illness</p>
                    </Card>
                    <Card image="/SSPI.png" link="https://web.facebook.com/sspinitiative/?d=%7B%22u%22%3A100044162600564%2C%22f%22%3A207799259245384%2C%22t%22%3A1609251101%2C%22ed%22%3A[]%7D&s=AWVWXUO9OfcOd6GgPQg&_rdc=1&_rdr"> 
                        <h5><b>Smart Suicide Prevention Initiative - SSPI</b></h5>
                        <p>The Smart Suicide Prevention Initiative (SSPI) is a voluntary and non-governmental organization towards preventing suicide, raising awareness, and providing resources and aid to those affected by suicide as well as advocate for policy that will save lives.</p>
                        <p><b>Location: </b>Church Village Road, Durumi Abuja, Nigeria</p>
                    </Card>
            </Collapsible>
        </div>
    ) 
}

export default Index;