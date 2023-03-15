import Carousel from 'react-bootstrap/Carousel';
import Bio from './Bio';
import Bio2 from './Bio2';

const MyCarousel = () => {
    return (
        <Carousel>
          <Carousel.Item>
            <Bio />
          </Carousel.Item>
          <Carousel.Item>
            <Bio2 />
          </Carousel.Item>

        </Carousel>
    );
}

export default MyCarousel;