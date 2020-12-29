import React from 'react';
import Collapsible from '../Collapsible/index';
import Card from '../Card/index';

const Index = () => {
    return (
        <div>
            <Collapsible header="Learning Disability">
                    <Card image="/dyslexia.jpg" link="https://www.dyslexiafoundation.org.ng/"> 
                        <h5><b>Dyslexia Foundation Nigeria</b></h5>
                        <p>Dyslexia Foundation Nigeria is a registered social enterprise committed to creating awareness, identification and training on learning challenges (especially dyslexia) to students, parents, teachers and other stakeholders in Nigeria</p>
                        <p><b>Location: </b>5 Adekunle Fajuyi Crescent, Ogba, Ikeja</p>
                </Card>
                <Card image="/open.jpg" link="http://opendoorsnigeria.org/"> 
                        <h5><b>Open Doors Special Education Center</b></h5>
                    <p>They serve Individuals with intellectual disability and developmental delay. These include: Mental retardation, autism, ASD, cerebral palsy, dyslexia, Down syndrome, reading disability, dyslexia, speech and language delay, articulation disorder, learning disability</p>
                    <p><b>Location: </b> Open Doors Special Education Centre off Liberty Boulevard in Giring, Jos, Plateau State, Nigeria.</p>
                </Card>
                <Card image="/benola.png" link="http://benola.org/"> 
                        <h5><b>Benola</b></h5>
                        <p>The Initiative is focused on professionally networking families, friends, health care professionals, care givers and educators in order to keep them abreast of current trends and options available for better management of Cerebral palsy.</p>
                        <p><b>Location: </b> Suite 19/20, Praise Plaza, Ajah/Ado Road, Lekki, Lagos, Nigeria</p>
                </Card>
            </Collapsible>
        </div>
    ) 
}

export default Index;