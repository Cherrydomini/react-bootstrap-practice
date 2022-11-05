import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function TestReact01() {
    return (
        <div>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/main1.jpg"
                alt="First slide"
                width="100%"
                height="600px"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/main2.jpg"
                alt="second slide"
                width="100%"
                height="600px"
                />
        
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/main3.jpg"
                alt="third slide"
                width="100%"
                height="600px"
                />
        
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </div>
        );
     
    }

export default TestReact01;

