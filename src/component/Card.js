import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const Kartu = (props) => {
  console.log(props)
    return (
        <div className='mx-auto'>
            <Card body style={{padding: '50px', width: '300px'}}>
                <CardTitle><h3>{props.nama}</h3></CardTitle>
                <CardText>Rp. {props.harga}</CardText>
                <CardText><img src={props.image} alt='products' style={{width: '100px', objectFit: 'cover', height: '100px' }}/></CardText>
            </Card>
        </div>
  );
};

export default Kartu;
