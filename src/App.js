import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Admin from './components/Admin/Admin';
import { Route, Routes } from 'react-router-dom';
import NavbarForm from './components/NavbarForm';
import HomePage from './components/Home/HomePage';
import About from './components/About/About';
import Footer from './components/Footer';
import AppRouter from './components/AppRouter';

function App() {

  return (
    <>
      <Container>
        <NavbarForm />
        <AppRouter />
      </Container>
      <Container>
        <Footer />
      </Container>

    </>
  );
}

export default App;


