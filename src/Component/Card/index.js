import React from 'react';
import {Icon, Row, Col, Card,CardTitle} from 'react-materialize';


const Index = ({image, children}) => {
    return (
        <div>
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
      header={<CardTitle image={image}  className="ngoImg"/> }
      horizontal
      revealIcon={<Icon>more_vert</Icon>}
    >
      {children}
    </Card>
  </Col>
</Row>
        </div>
    ) 
}

export default Index;