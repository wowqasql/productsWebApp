import React, { useState } from 'react'
import { Navbar, Image, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { ABOUT, ADMIN_PAGE, HOME_PAGE } from './router/routerPath';
import {authActionCreator} from '../reducers/auth/action-creator'


const Styles = styled.div`
  a, .navbar-nav, .nav-link {
    color: black;
    text-decoration: none;
    
    &:hover {
      color: #adb1b8
    }
  }
`
const NavbarForm = () => {
  const [show, setShow] = useState(false);


  const handleShow = () => {
    setShow(true);

  }
  const dispatch = useDispatch()

  const {isAuth} = useSelector(state => state.auth)
  

  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand='lg' variant="light" bg='light'>

          <Image className='mx-2' src='https://w7.pngwing.com/pngs/66/249/png-transparent-polish-accent-language-poles-english-others-miscellaneous-english-text.png'
            height='60px'
            rounded
          />
          <Link Link className='mx-2 fs-4' style={{ fontWeight: 'bold' }} to={HOME_PAGE}>Название компании</Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='mr-auto' fill variant="tabs">
              <Nav.Link className='fs-4 mx-5'><PermPhoneMsgIcon className='mx-1' />+7(900)888-88-88</Nav.Link>
              <Nav.Link className='fs-4'><Link to={ABOUT}><PeopleAltIcon className='mx-2' />О нас</Link></Nav.Link>
              {isAuth
                ?
                <>
                  <Nav.Link className='fs-4'><Link to={ADMIN_PAGE}><PeopleAltIcon className='mx-2' />Админ</Link></Nav.Link>
                  <Nav.Link className='fs-4'><Link to={HOME_PAGE}><PeopleAltIcon />Выход</Link></Nav.Link>
                </>

                :
                <Nav.Link onClick={handleShow} className='fs-4 mx-2'><Button variant="light" ><PeopleAltIcon className='mx-2' />Вход</Button></Nav.Link>
              }


              <Nav.Link className='fs-4'><TwitterIcon /></Nav.Link>
              <Nav.Link className='fs-4' target="_blank" href="https://instagrama.ru/"><InstagramIcon /></Nav.Link>
              <Nav.Link className='fs-4'><FacebookIcon /></Nav.Link>


              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>

      <LoginForm show={show} setShow={setShow} />

    </>
  )
}

export default NavbarForm