import React, { useState } from 'react'
import { Card, Row, Col, Button, Modal, Container, ModalBody, Carousel } from 'react-bootstrap'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const img = 'https://img.freepik.com/free-photo/a-young-woman-buys-groceries-in-a-supermarket-with-a-phone-in-her-hands_169016-5430.jpg?w=740&t=st=1671893107~exp=1671893707~hmac=9084cc40a2c2046ec69e0dcc4cfda62b18feb5d2540072db8415dd912152a353'
const img1 = 'https://img.freepik.com/free-photo/close-up-view-of-shopping-cart-overloaded-with-food-while-in-background-female-person-choosing-products_342744-1133.jpg?w=740&t=st=1671831534~exp=1671832134~hmac=b0e26f925376db935f722356b0610386282db12104ca09468d243a10cb55ae7a'
const img2 = 'https://img.freepik.com/premium-photo/fresh-food-and-vegetables-in-shopping-basket-on-mobile-smartphone-on-wood-table-with-supermarket-aisle-blurred-background-grocery-online-concept_293060-4950.jpg?w=740'

const ProductItemModel = ({show, setShow, product}) => {



  const handleClose = () => {
    setShow(false)
  }

  return (

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Название товара</Modal.Title>
    </Modal.Header>
    <Carousel>

<Carousel.Item >
  <img
    className="d-block w-100"
    src='https://img.freepik.com/free-photo/close-up-view-of-shopping-cart-overloaded-with-food-while-in-background-female-person-choosing-products_342744-1133.jpg?w=740&t=st=1671831534~exp=1671832134~hmac=b0e26f925376db935f722356b0610386282db12104ca09468d243a10cb55ae7a'/>
    </Carousel.Item>
    <Carousel.Item>
  <img
    className="d-block w-100"
    src='https://img.freepik.com/free-photo/a-young-woman-buys-groceries-in-a-supermarket-with-a-phone-in-her-hands_169016-5430.jpg?w=740&t=st=1671893107~exp=1671893707~hmac=9084cc40a2c2046ec69e0dcc4cfda62b18feb5d2540072db8415dd912152a353'/>
    </Carousel.Item>

    <Carousel.Item>
    <img
      className="d-block w-100 "
      src='https://img.freepik.com/premium-photo/fresh-food-and-vegetables-in-shopping-basket-on-mobile-smartphone-on-wood-table-with-supermarket-aisle-blurred-background-grocery-online-concept_293060-4950.jpg?w=740'/>
    </Carousel.Item>

    </Carousel>
    
    <Modal.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sapiente.</Modal.Body>

    <Modal.Body><h5><LocalOfferIcon className='mx-2'/>Цена: 200P</h5></Modal.Body>
    <Modal.Body><h5><WhatsAppIcon className='mx-2'/>+7(900)888-88-88</h5></Modal.Body>

  
    <Modal.Footer>
    <Modal.Body></Modal.Body>
      <Button variant="outline-secondary" onClick={handleClose}>
        Закрыть
      </Button>
      
    </Modal.Footer>
  </Modal>

















    // <Modal show={show} onHide={handleClose}>
    //     <Modal.Header closeButton>
    //       <Modal.Title>{product.name}</Modal.Title>
    //     </Modal.Header>
    //     <Carousel>

    // <Carousel.Item >
    //   <img
    //     className="d-block w-100"
    //     src={product.img}/>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //   <img
    //     className="d-block w-100"
    //     src={product.img}/>
    //     </Carousel.Item>

    //     <Carousel.Item>
    //     <img
    //       className="d-block w-100 "
    //       src={product.img}/>
    //     </Carousel.Item>

    //     </Carousel>
        
    //     <Modal.Body>{product.desc}</Modal.Body>

    //     <Modal.Body><h5><LocalOfferIcon className='mx-2'/>Цена: {product.price}</h5></Modal.Body>
    //     <Modal.Body><h5><WhatsAppIcon className='mx-2'/>+7(900)888-88-88</h5></Modal.Body>

      
    //     <Modal.Footer>
    //     <Modal.Body></Modal.Body>
    //       <Button variant="outline-secondary" onClick={handleClose}>
    //         Закрыть
    //       </Button>
          
    //     </Modal.Footer>
    //   </Modal>
  )
}

export default ProductItemModel