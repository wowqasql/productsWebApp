import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';
import { createTypes } from '../../http/productAPI';

const TypeModal = ({typeShow, setTypeShow}) => {

  const [value, setValue] = useState('')

  const handleClose = () => {
    setTypeShow(false)
  }
  const addType = () => {
    createTypes({name: value}).then(data => setValue(''))
    handleClose()
  }

  return (
      <Modal show={typeShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавление категории</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>      
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              value={value}
              onChange={e => setValue(e.target.value)}
              className="mb-3"
              placeholder="Название категории"
              autoFocus />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Container className='mb-3 d-flex justify-content-end'>
        <Button className='mx-2' variant='outline-secondary' onClick={addType}>Добавить</Button>
        <Button variant='outline-secondary' onClick={handleClose}>Закрыть</Button>
        </Container>
      </Modal>
  )
}

export default TypeModal