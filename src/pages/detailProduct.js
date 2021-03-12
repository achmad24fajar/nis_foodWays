import React, {useState} from 'react'

import {products} from '../data/dataProduct.js';
import {Container, Row, Col} from 'react-bootstrap';

import Card from '../components/Card.js';

function DetailProduct() {

  const item = products.filter(data => data.restourant == 'KFC');

  console.log(item)

  return(
    <>
    <div className="bg-warning position-absolute detail-product"></div>
    <div className="detail-product-menu my-5">
      <Container>
      <h2>{item[0].restourant}, Menus</h2>
        <Row>
        {item[0].product.map((data) => (
          <Col md={3}>
            <Card data={data} template="style-3"/>
          </Col>
        ))}
        </Row>
      </Container>
    </div>
    </>
  );

}

export default DetailProduct
