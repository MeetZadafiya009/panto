import { Col, Container, Row } from "react-bootstrap";
import arrow from '../assets/images/arraow.png';
import image from '../assets/images/Group 48095439.png';
const Material = () => {
    return (
        <>
            <section className="material">
                <Container fluid>
                    <Row>
                        <Col sm={12} lg={6} className='ps-5 gx-5 mb-lg-0 mb-5 flex-start pe-5'>
                            <div>
                                <p className="text-orange gilroy-bold material-heading text-uppercase">Materials</p>
                                <h1 className="gilroy-bold material-title">Very serious <br className="break-2"/> materials for making <br className="break-3" />furniture</h1>
                                <p >Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                                <div><span className='text-orange me-4'>More Info</span><span><img src={arrow} /></span></div>
                            </div>
                        </Col>
                        <Col className="flex-end px-0"  sm={{span:8,offset:4}} xs={{span:10,offset:2}}  lg={{span:6,offset:0}}>
                            <div>
                                <img src={image} className="img-fluid" />
                            </div>
                            {/* <Row>
                                <Col xs={5} >
                                    <img className='img-fluid' src={image1} />
                                    <img className='img-fluid' src={image2} />
                                </Col>
                                <Col className="px-0 end" xs={7}>
                                    <img className="img-fluid" src={image} />
                                </Col>
                            </Row> */}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Material;