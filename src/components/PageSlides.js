import './PageSlides.css'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function PageSlides(prop) {
    return (
        <div className='slideimages'>
            <Carousel slide={true}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={prop.srcss1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={prop.srcss2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={prop.srcss3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={prop.srcss4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={prop.srcss5}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={prop.srcss6}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={prop.srcss7}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={prop.srcss8}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={prop.srcss9}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={prop.srcss10}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            

        </div>
    )
}

export default PageSlides