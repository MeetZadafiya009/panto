import { Col, Container, Row } from "react-bootstrap";
import arrow from './../../assets/images/arraow.png';
import image1 from './../../assets/images/Group 48095417.png';
import image2 from './../../assets/images/Group 48095419.png';
import image from './../../assets/images/Group 48095442.png';

import './material.scss';
const Material = () => {
    return (
        <>
            <section className="material">
                <Container fluid>
                    <Row>
                        <Col sm={12} lg={6} className='ps-5 gx-5 mb-lg-0 mb-5 flex-start pe-5'>
                            <div>
                                <p className="text-orange text-uppercase">Materials</p>
                                <h1 className="gilroy-bold">Very serious materials for making furniture</h1>
                                <p className="text-justify">Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                                <div><span className='text-orange me-4'>More Info</span><span><img src={arrow} /></span></div>
                            </div>
                        </Col>
                        <Col className="" sm={{span:12,offset:0}} md={{span:8,offset:4}}  lg={{span:6,offset:0}}>
                            <Row>
                                <Col xs={5} >
                                    <img className='img-fluid' src={image1} />
                                    <img className='img-fluid' src={image2} />
                                </Col>
                                <Col className="px-0 end" xs={7}>
                                    <img className="img-fluid" src={image} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Material;