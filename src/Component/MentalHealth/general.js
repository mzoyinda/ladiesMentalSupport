import React from 'react';
import Collapsible from '../Collapsible/index';
import Card from '../Card/index';

const Index = () => {
    return (
        <div>
            <Collapsible header="Stress, Anxiety and General Mental Health">
                    <Card image="/she.png" link="http://shewriteswoman.org/"> 
                        <h5><b>She Writes Woman</b></h5>
                        <p>She Writes Woman is a women-led movement of love hope and support that gives mental health a voice in Nigeria, and their vision is to create better lives for Nigerians by improving the way they think, feel and behave</p>
                        <p><b>Location: </b>17, Yinusa Adeniji (The Brickhouse), off Muslim Avenue, Ikeja</p>
                </Card>
                <Card image="/MCF.Jpg" link="https://mentalcare.life/"> 
                        <h5><b>The Mental Care Foundation</b></h5>
                        <p>The Mental Care Foundation brings together, technology and emotional support to give mental health a voice in Nigeria, where depression is seen as a “white man” illness</p>
                    </Card>
                <Card image="/mani.png" link="http://project-covid.ng"> 
                        <h5><b>Mentally Aware Nigeria Initiative</b></h5>
                    <p>MANI is a community of young people who are motivated to fight stigma and create an environment that makes it possible for people to seek care for their mental health without fear of discrimination.</p>
                </Card>
                <Card image="/LPM.jpg" link="https://lpmfoundation.org/"> 
                        <h5><b>LOVE, PEACE and MENTAL HEALTH Foundation (LPM)</b></h5>
                        <p>LOVE, PEACE and MENTAL HEALTH Foundation (LPM) is a nonprofit organization that is devoted to Mental Health Awareness and Advocacy and also building positive communities for Nigerian youths.</p>
                        <p><b>Location: </b>64 College road (opposite coker close), Ogba, Lagos.</p>
                </Card>
                <Card image="/neem.png" link="https://www.neemfoundation.org.ng/"> 
                        <h5><b>Neem Foundation</b></h5>
                        <p>Neem Foundation is Non-Governmental Organisation that is committed to improving the lives of those affected by the North- East insurgency in Nigeria through building inclusive communities, providing and raising the standards of psycho-social care and countering extremist narratives.</p>
                        <p><b>Location: </b>No. 2, Kwa Falls Street, Maitama, Abuja</p>
                </Card>
            </Collapsible>
        </div>
    ) 
}

export default Index;