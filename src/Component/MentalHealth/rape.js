import React from 'react';
import Collapsible from '../Collapsible/index';
import Card from '../Card/index';

const Index = () => {
    return (
        <div>
            <Collapsible header="Sexual Assault/Rape">
                    <Card image="/STER.jpg" link="https://standtoendrape.org/"> 
                        <h5><b> Stand To End Rape (STER)</b></h5>
                        <p>STER is youth-led non-profit advocating against sexual violence, providing prevention mechanisms and supporting survivors with psychosocial services.</p>
                        <p><b>Location: </b>1B Godson Ilodianya Close, Oniru, Lekki</p>
                </Card>
                <Card image="/mirabel.jpg" link="https://www.linkedin.com/company/mirabelng/?originalSubdomain=ng"> 
                        <h5><b>The Mirabel Centre</b></h5>
                        <p>the Mirabel Centre specialises in free and comprehensive medical, counseling, and aftercare services for survivors, as well as free tests and medication.</p>
                    <p><b>Location: </b>Lasuth, Ikeja General Hospital Road, Ikeja 
                    </p>
                </Card>
                <Card image="/Hands.png" link="https://www.handsoffinitiative.org/"> 
                        <h5><b>Hands Off Initiative</b></h5>
                        <p> Hands Off Initiative’s goal is to “break the cycle of abuse in our society and address the systemic problem of rape, sexual abuse, harassment, and assault </p>
                </Card>
                <Card image="/project.jpg" link="https://projectalertnig.org/"> 
                        <h5><b>Project Alert</b></h5>
                        <p>To educate the society on the forms and prevalence of violence against women and render practical support to female victims of violence</p>
                    <p><b>Location: </b>Lagos: 21, Akinsanya Street Off Isheri Road, Taiwo Bus stop Ojodu - Berger, Lagos. <p>Abuja:  26 Bamenda Street, Off Abidjan Street, Wuse Zone 3, Abuja.</p>
                    </p>
                </Card>
                <Card image="/WARIF.png" link="https://warifng.org/about-warif/"> 
                        <h5><b>Women at Risk International Foundation,  (WARIF) </b></h5>
                    <p> WARIF's vision is to build a society free of rape and sexual violence  and to raise global awareness and advocate against the prevalence of violence against women and girls. </p>
                    <p><b>Location: </b>6 Turton Street, off Thorburn Avenue Yaba, Lagos
                    </p>
                    </Card>
                   
            </Collapsible>
        </div>
    ) 
}

export default Index;