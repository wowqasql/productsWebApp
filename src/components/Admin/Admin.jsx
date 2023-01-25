import React, { useState } from 'react'
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import ProductModal from './productModal';
import TypeModal from './typeModal'

const Admin = () => {
  const [typeShow, setTypeShow] = useState(false)
  const [productShow, setProductShow] = useState(false);
  
  const typeHandleShow = () => setTypeShow(true)
  const productHandleShow = () => setProductShow(true);

  return (
    <div>
      <Container className='my-5 text-center'>
        <Row >
          <Col md={12}>
            <Button className='w-100' variant="outline-secondary" onClick={typeHandleShow}>Добавить новую категорию</Button>
          </Col>
          <Col md={12}>
            <Button className='w-100 my-3' variant="outline-secondary" onClick={productHandleShow}>Добавить новый товар</Button>
          </Col>
        </Row>
      </Container>

      <TypeModal typeShow={typeShow} setTypeShow={setTypeShow}/>
      <ProductModal productShow={productShow} setProductShow={setProductShow} />
    </div>
  )
}

export default Admin