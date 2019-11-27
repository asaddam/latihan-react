import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Kartu = (props) => {
  console.log(props)
    return (
    <Row>
      <Col sm="6">
        <Card body>
    <CardTitle>{props.contoh}</CardTitle>
    <CardText>{props.contoh2}</CardText>
    <Button>{props.contoh3}</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Kartu;