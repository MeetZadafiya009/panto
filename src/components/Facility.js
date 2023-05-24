import { Col, Container, Row } from 'react-bootstrap';
import arrow from '../assets/images/arraow.png';
const Facility = () => {
    return (
        <>
            <section className='facility'>
                <Container className='px-xl-5 py-lg-5 py-3' fluid>
                    <Row className='px-xxl-5 m-0 px-lg-4 px-5 py-5 gx-5'>
                        <Col className='flex-start  facility-title' lg={3} md={12} xs={12}>
                            <h2 className='gilroy-medium fw-bolder'>Why <br className='break'/> Choosing  Us</h2>
                        </Col>
                        <Col lg={3} className='mb-md-0 mb-4' md={4} xs={12}>
                            <h5 className='gilroy-medium fw-bold'>Luxury Facilities</h5>
                            <p className=''>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                            <div><span className='me-4 text-orange'>More Info</span><span><img src={arrow} alt='arrow' /></span></div>
                        </Col>
                        <Col className='mb-md-0 mb-4' lg={3} md={4} xs={12}>
                            <h5 className='gilroy-medium fw-bold'>Affordable Price</h5>
                            <p className=''>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
                            <div><span className='me-4 text-orange'>More Info</span><span><img src={arrow} alt='arrow' /></span></div>
                        </Col>
                        <Col className='mb-md-0 mb-4' lg={3} md={4} xs={12}>
                            <h5 className='gilroy-medium fw-bold'>Many Choices</h5>
                            <p className=''>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
                            <div><span className='me-4 text-orange'>More Info</span><span><img src={arrow} alt='arrow' /></span></div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Facility;