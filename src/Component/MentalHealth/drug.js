import React from 'react';
import Collapsible from '../Collapsible/index';
import Card from '../Card/index';

const Index = () => {
    return (
        <div>
            <Collapsible header="Drug/ Alcohol Abuse">
                    <Card image="/house.jpg" link="https://www.freedomfoundationng.org/house-of-refuge/"> 
                        <h5><b>House Of Refuge (HOR)</b></h5>
                        <p>House Of Refuge (HOR) is a drug rehabilitation and resource center which caters specifically for the rehabilitation needs of drug and alcohol dependent persons and provides medically assisted detoxification to individuals age 17- 59, struggling with addiction to alcohol and controlled substances such as: prescription medicine, marijuana, heroin, cocaine, crack, codeine, etc..</p>
                        <p><b>Location: </b>The Dome – Freedom Way, End of Admiralty Way, Lekki Phase 1, Lagos.</p>
                </Card>
                <Card image="/olive.png" link="http://www.theoliveprime.com/"> 
                        <h5><b>Olive Prime Centre</b></h5>
                        <p>This centre treats individuals with addiction problems as well as psychological problems, and provides a flexible pathway to recovery..</p>
                    <p><b>Location(s): </b>Adewale Kolawole Crescent, Lekki Phase I (Oceanside), Lagos State. <p>Plot 220, E.Momoh Avenue, Kado District, FCT - Abuja, Nigeria</p>
                    </p>
                </Card>
                <Card image="/tranquil.jpg" link="https://tranquilandquest.com.ng/"> 
                        <h5><b>Tranquil and Quest</b></h5>
                        <p>They offer stress relief programs along with psychotherapy for victims of drug and substance abuse.</p>
                        <p><b>Location: </b>15, Isaac Aloko Street, Igbo-Effon, Lekki Lagos</p>
                    </Card>
                   
            </Collapsible>
        </div>
    ) 
}

export default Index;