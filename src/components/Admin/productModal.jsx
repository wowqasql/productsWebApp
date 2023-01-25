import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Button, Container, DropdownButton, Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { createProducts, fetchTypes } from '../../http/productAPI';

const ProductModal = ({ productShow, setProductShow }) => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [desc, setDesc] = useState('')
  const [file, setFile] = useState('')
  const [types, setType] = useState('')
  const [fetchType, setFetchType] = useState([])


  useEffect(() => {
    fetchTypes().then(data => setFetchType(data))
  }, [])
  const addProduct = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('desc', desc)
    formData.append('price', `${price}`)
    formData.append('typeId', types.id)
    formData.append('img', file)
    
    createProducts(formData).then(data => handleClose())
    console.log(types)
  }

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const handleClose = () => {
    setProductShow(false)
  }

  return (
    <Modal show={productShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Добавление товара</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <Dropdown>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        {types.name || 'Выберите категорию'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {fetchType.map(type => <Dropdown.Item onClick={() => setType(type)} href="#/action-1">{type.id}</Dropdown.Item>)}
      </Dropdown.Menu>
    </Dropdown> 


        <Form>
          <Form.Group className="my-4" controlId="exampleForm.ControlInput1">
            <Form.Control
              className="mb-3"
              placeholder="Название товара"
              autoFocus
              value={name}
              onChange={e => setName(e.target.value)}
              />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Описание товара</Form.Label>
              <Form.Control 
              as="textarea" 
              rows={3} 
              value={desc}
              onChange={e => setDesc(e.target.value)}
              />
            </Form.Group>
            <Form.Control
              placeholder="Цена" 
              type='number'
              autoFocus
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
            />
            <Form.Label className='mt-3'>Загрузить файл</Form.Label>
            <Form.Control
              className='mt-2'
              type='file'
              autoFocus
              
              onChange={selectFile}
            />
            <hr></hr>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Container className='mb-3 d-flex justify-content-end'>
        <Button className='mx-2' variant='outline-secondary' onClick={addProduct}>Добавить</Button>
        <Button variant='outline-secondary' onClick={handleClose}>Закрыть</Button>
      </Container>
    </Modal>
  )
}

export default ProductModal