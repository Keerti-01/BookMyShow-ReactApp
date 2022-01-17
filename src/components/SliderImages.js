
import {Carousel} from 'react-bootstrap';

function SliderImages() {
    return (
      <div>
        <Carousel fade variant="dark">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="./images/cs1.jpg"
            alt="First slide"
            
            />
            <Carousel.Caption>
            
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="./images/cs2.jpg"
            alt="Second slide"
            />

            <Carousel.Caption>
            
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="./images/cs3.png"
            alt="Third slide"
            />

            <Carousel.Caption>
           
           
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      </div>
    )
  };
      
  export default SliderImages;
  