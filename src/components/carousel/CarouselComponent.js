import React from "react";
import { Carousel } from 'react-bootstrap';
import './Carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class CarouselComponent extends React.Component {

    render() {
        return (
            <div>
                <div className='container'>
                    <div className="row">
                        <div className="col-sm-12">
                            <h3></h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 "
                                        src="https://picsum.photos/500/300?img=1"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                   
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 "
                                        src="https://picsum.photos/500/300?img=2"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                      
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=3"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                       
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
                <button id="get-ticket" className="btn btn-warning">Get Tickets Now</button>
            </div>
        )
    };
}

export default CarouselComponent;