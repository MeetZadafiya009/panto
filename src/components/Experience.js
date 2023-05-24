import { Col, Container, Row } from 'react-bootstrap';
import image from '../assets/images/Group 48095438.png';
import arrow from '../assets/images/arraow.png';
const Experience = () => {
    return (
        <>
            <section className='experience'>
                <Container className='px-0 pt-5' fluid>
                    <Row className='gx-5 pt-5  me-0'>
                        <Col className='flex-start' sm={8} lg={6}>
                            <img className='img-fluid' src={image} />
                        </Col>
                        <Col sm={12} xl={5} lg={6} className='mt-lg-0 ps-xl-0 mt-3 px-lg-0 px-5 flex-start'>
                            <div className='px-lg-0 px-3'>
                                <p className='gilroy-bold experience-heading text-orange'>EXPERIENCE</p>
                                <h1 className='gilroy-bold experience-title'>we provide you the <br className='break-1' />best experience</h1>
                                <p className=' experience-text'>You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                                <div><span className='text-orange me-4'>More Info</span><span><img src={arrow} /></span></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Experience;