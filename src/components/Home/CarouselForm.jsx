import React from 'react'
import {Carousel} from 'react-bootstrap';
const CarouselForm = () => {
  return (
    <>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://img.freepik.com/premium-photo/ripe-wheat-on-the-field-selective-focus_160152-5025.jpg?w=740"
        alt="First slide"
        height='350px'
        />
      <Carousel.Caption>
        <h2 className="text-dark">First slide label</h2>
        <strong className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</strong>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://img.freepik.com/premium-photo/gold-wheat-field-beautiful-nature-sunset-landscape-background-of-ripening-ears-of-meadow-wheat-field-concept-of-great-harvest-and-productive-seed-industry_130265-13826.jpg?w=740"
        alt="Second slide"
        height='350px'
      />

      <Carousel.Caption>
        <h3 className="text-dark">Second slide label</h3>
        <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://img.freepik.com/premium-photo/golden-wheat-spikelets-with-grain-background-top-view_224798-2316.jpg?w=740"
        alt="Third slide"
        height='350px'
        />

      <Carousel.Caption>
        <h3 className="text-dark">Third slide label</h3>
        <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <div className='my-5'></div>
  </>

  
  )
}

export default CarouselForm