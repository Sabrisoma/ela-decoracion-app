import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'react-bootstrap/esm/CarouselItem';


function CarrouselBS() {
    return (
        <Carousel>
            <Carousel.Item>
                <ExampleCarouselImage />
                <img src='../banner1.png' alt='banner bienvenida' style={{ width: '100%' }} />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage />
                <img src='../baner2.png' alt='banner saludo' style={{ width: '100%' }} />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage />
                <img src='../bannerela.jpg' alt='banner logo' style={{ width: '100%' }} />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarrouselBS;