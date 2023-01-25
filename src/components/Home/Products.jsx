import React, { useEffect, useMemo, useState } from 'react'
import { Card, Row, Col, Button, Modal, Container, ModalBody, Carousel, Form } from 'react-bootstrap'
import CallToActionIcon from '@mui/icons-material/CallToAction';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SearchIcon from '@mui/icons-material/Search';
import {useSelector } from 'react-redux';
import ProductItemModel from './ProductItemModel';
import { fetchProducts, findByIdAndDelete } from '../../http/productAPI';
const img = "https://img.freepik.com/free-photo/close-up-view-of-shopping-cart-overloaded-with-food-while-in-background-female-person-choosing-products_342744-1133.jpg?w=740&t=st=1671831534~exp=1671832134~hmac=b0e26f925376db935f722356b0610386282db12104ca09468d243a10cb55ae7a"


const Products = () => {

  const [products, setProducts] = useState([]);
  const {isAuth} = useSelector(state => state.auth)
  const [show, setShow] = useState(false);
  const [productModel, setProductModel] = useState([])
  const [search, setSearch] = useState('')


  const useSearchProducts = () => {
  const searchProducts = useMemo(() => {
      if(search){
        return products.filter(s => s.name.toLowerCase().includes(search))
      }
      return products
    },[search, products])
    return searchProducts
  }

  const searchProduct = useSearchProducts()

  
  useEffect(() => {
    fetchProducts().then(data => setProducts(data.rows))
    
  }, [products])

  const onDelete = (id) => {
    findByIdAndDelete(id)
  }

  const handleShow = (product) => {
    setShow(true);
    setProductModel([product])
    console.log(product)
  }

  return (
    <>
    <Form className="d-flex">
    <Form.Control
      value={search}
      onChange={e => setSearch(e.target.value)}
      type="search"
      placeholder="Поиск..."
      className="me-2"
      aria-label="Search"
      />
    <Button 
      variant="outline-secondary">
    <SearchIcon/>Поиск</Button>
  </Form>
  <div className='my-5'></div>
{/* 
<Container >
    <Row >
        {[0,1,2,3,4,5,6,8].map(product => (
          <Col md='3' xs='12' className='mb-5'>
            <Card >
              <Card.Img variant="top" src='https://img.freepik.com/free-photo/close-up-view-of-shopping-cart-overloaded-with-food-while-in-background-female-person-choosing-products_342744-1133.jpg?w=740&t=st=1671831534~exp=1671832134~hmac=b0e26f925376db935f722356b0610386282db12104ca09468d243a10cb55ae7a' />
              <Card.Body>
                <Card.Title>Название товара</Card.Title>
                <Card.Text text-center >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sint
                </Card.Text>
                <Card.Title><LocalOfferIcon className='mx-2'/>Цена: 200P</Card.Title>
                <Card.Title><WhatsAppIcon className='mx-2'/>+7(900)888-88-88</Card.Title>
                <Button className='mt-3' variant="outline-secondary" onClick={() => handleShow(product)}><CallToActionIcon className='mx-1'/>Описание</Button>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    {productModel.map(prod => <ProductItemModel key={prod.id} show={show} setShow={setShow} product={prod}/>)} */}




     <Container >
    <Row >
        {searchProduct.map(product => (
          <Col key={product.id} md='3' xs='12' className='mb-5'>
            <Card className='h-100' >
              <Card.Img style={{height: '300px' }} variant="top" src={'http://localhost:5000/' + product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text text-center >
                  {product.desc}
                </Card.Text>
                <Card.Title><LocalOfferIcon className='mx-2'/>Цена: {product.price}</Card.Title>
                <Button className='mt-3' variant="outline-secondary" onClick={() => handleShow(product)}><CallToActionIcon className='mx-1'/>Описание</Button>
                {isAuth &&
                  <>
                  <Button className='mt-3' variant="outline-secondary" onClick={() => handleShow(product)}><CallToActionIcon className='mx-1'/>Редактировать</Button>
                  <Button className='mt-3' variant="outline-secondary" onClick={() => onDelete(product.id)}><CallToActionIcon className='mx-1'/>Удалить</Button>
                </>                
                }
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    {productModel.map(prod => <ProductItemModel key={prod.id} show={show} setShow={setShow} product={prod}/>)} 
    

      
      
    </>
  )
}

export default Products