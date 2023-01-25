import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/auth/action-creator';

const LoginForm = ({show, setShow}) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const submit = () => {
    dispatch(login(username, password))
    handleClose()
  }

  const handleClose = () => {
    setShow(false);
  }

  return (
<>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Логин</Form.Label>
              <Form.Control
                value={username}
                onChange={e => setUsername(e.target.value)}
                type="email"
                placeholder="Введите логин"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control 
          value={password}
          onChange={e => setPassword(e.target.value)}  
          type="password" 
          placeholder="Введите пароль" />
        </Form.Group>
        
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submit}>
            Вход
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LoginForm