import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const AboutDescription = () => {
  return (


      <Container className='my-5 text-center'>
        <Row>
          <Col md={4}>
          <img className='w-100' src='https://img.freepik.com/free-photo/close-up-of-box-with-ripe-vegetables_329181-4612.jpg?w=740&t=st=1672086420~exp=1672087020~hmac=d4c22daf3b9704f6ee669ea22adafada8b2ce28c4bdc095f1ad77a9356bc1564'></img>
          </Col>
          <Col md={8}>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ut dolore, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ut dolore, ratione ipsam in magni recusandae eveniet quam doloribus placeat repudiandae ducimus suscipit ea quaerat. Nulla facilis aut atque. Quas unde animi ratione, incidunt voluptate deserunt modi inventore necessitatibus nihil.</p>
          </Col>
        </Row>
      </Container>



// {/* 
//       <div style={{ marginTop: '30px' }}></div>
//       <Container md='4' xs='6'>
//         <div className='block'>
//           <img src='https://img.freepik.com/premium-photo/field-with-sheaves-of-wheat-from-air_175935-7.jpg?w=740'></img>
//           <h5 style={{ 'font-size': ' 6vw' }}>Lorem ipsum dolor sit amet consectetur, <p style={{ color: '#fff' }}>adipisicing elit. ipsum dolor sit.</p></h5>
//         </div>
//       </Container> */}

  )
}

export default AboutDescription