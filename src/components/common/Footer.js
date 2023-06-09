import { Col, Container, Row } from 'react-bootstrap';
import instagram from './../../assets/images/instagram.png';
import facebook from './../../assets/images/facebook.png';
import twitter from './../../assets/images/twitter.png';
const Footer=()=>{
    return (
        <>
            <footer className='pb-4 footer'>
                <Container>
                    <Row className='pb-5'>
                        <Col className='px-sm-0 px-5 text-centerr' md={3} sm={6} xs={12}>
                            <h2 className='fw-bold'>Panto</h2>
                            <p className='mt-4'>
                            The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
                            </p>
                        </Col>
                        <Col md={3} sm={6} xs={12} className='flex-center'>
                            <ul className='footer-menu text-centerr'>
                                <li className='text-orange'>Services</li>
                                <li><a href='#'>Email Marketing</a></li>
                                <li><a href="#">Campaigns</a></li>
                                <li><a href="#">Branding</a></li>
                            </ul>
                        </Col>
                        <Col md={3} sm={6} xs={12} className='menu-3 flex-center'>
                            <ul className='footer-menu footer-menu-3 text-centerr'>
                                <li className='text-orange'>Furniture</li>
                                <li><a href="#">Beds</a></li>
                                <li><a href="#">Chair</a></li>
                                <li><a href="#">All</a></li>
                            </ul>
                        </Col>
                        <Col md={3} sm={6} xs={12} className='flex-center'>
                            <ul className='footer-menu text-centerr'>
                                <li className='text-orange'>Follow Us</li>
                                <li className=' d-flex'><img src={facebook} className='me-4 facebook img-fluid' alt='facebook'/><a href='#'>Facebook</a></li>
                                <li className=' d-flex'><img src={twitter} className='me-3 twitter img-fluid' alt='twitter'/><a href='#'>Twitter</a></li>
                                <li className=' d-flex'><img src={instagram} className='me-3 instagram img-fluid' alt='facebook'/><a href='#'>Instagram</a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className='pt-3 pb-4 flex-between'>
                        <Col className='text-centerr mb-sm-0 mb-4' sm={4} xs={12}>
                            <span>Copyright © 2021</span>
                        </Col>
                        <Col className='footer-links flex-end' xs={12} sm={8} md={7}>
                            <div className='flex-center'>
                                <span className='me-5'>Terms & Conditions</span>
                                <span>Privacy Policy</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
export default Footer;