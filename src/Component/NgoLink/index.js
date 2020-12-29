import React from 'react';
import { Collapsible, CollapsibleItem, Icon, Row, Col, Card,CardTitle} from 'react-materialize';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavBar from '../NavBar/index';

const Index = () => {
    return (
        <div>
<NavBar/>
<Collapsible accordion className="ngoSection">
  <CollapsibleItem
    expanded={false}
    header="Depression"
    icon={<Icon><GiHamburgerMenu/></Icon>}
    node="div"
  >
  <Row>
  <Col
    m={12}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="/">This is a link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg"  className="ngoImg"/> }
      horizontal
      revealIcon={<Icon>more_vert</Icon>}
    >
      Here is the standard card with a horizontal image.
    </Card>
  </Col>
</Row>
  </CollapsibleItem>
  <CollapsibleItem
    expanded
    header="Rape"
    icon={<Icon><GiHamburgerMenu/></Icon>}
    node="div"
  >
    Yeah, you do seem to have a little 'shit creek' action going.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Sucide"
    icon={<Icon><GiHamburgerMenu/></Icon>}
    node="div"
  >
    You know, FYI, you can buy a paddle. Did you not plan for this contingency?
  </CollapsibleItem>
</Collapsible>
        </div>
    ) 
}

export default Index;