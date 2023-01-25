import React from 'react'
import { Container } from 'react-bootstrap'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Container fluid style={{backgroundColor: '#333', color: '#fff', marginTop: '15px'}}>
        <Container style={{display:'flex', justifyContent: 'end' , padding:'10px'}}>
          <div >
          <h4 className='mt-10'> +7(900)888-88-88 </h4><h4>website@gmail.com</h4><h5>Г. Воронеж Площадь Ленина 1</h5>
          <TwitterIcon/>
          <InstagramIcon/>
          <FacebookIcon/>
          <WhatsAppIcon/>
          </div>
        </Container>
        <div  style={{marginLeft:'78%', marginBottom:'1%',}}>
        </div>
    </Container>
  )
}

export default Footer