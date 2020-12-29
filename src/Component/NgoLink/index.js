import React from 'react';
import Collapsible from '../Collapsible/index';
import Card from '../Card/index';
import NavBar from '../NavBar/index';


const Index = () => {
    return (
        <div>
            <NavBar/>
            <div className="ngoSection">
            <Collapsible header="Depression">
                <Card image="https://materializecss.com/images/sample-1.jpg"> 
                        Here is the standard card with a horizontal image.
                </Card>
                <Card image="https://materializecss.com/images/sample-1.jpg"> 
                        Here is the standard card with a horizontal image.
                </Card>
                <Card image="https://materializecss.com/images/sample-1.jpg"> 
                    Here is the standard card with a horizontal image.
                </Card>
            </Collapsible>
            <Collapsible header="Rape">
                <Card image="https://materializecss.com/images/sample-1.jpg"> 
                    Here is the standard card with a horizontal image.
                </Card>
            </Collapsible>
            <Collapsible header="Suicide">
                <Card image="https://materializecss.com/images/sample-1.jpg"> 
                    Here is the standard card with a horizontal image.
                </Card>
            </Collapsible>
           </div>
        </div>
    ) 
}

export default Index;