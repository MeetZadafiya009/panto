import { Col, Container, Row } from "react-bootstrap";
import Slider from 'react-slick';
import client1 from '../assets/images/Ellipse 1131.png';
import client2 from '../assets/images/Ellipse 1131 (1).png';
import client3 from '../assets/images/Ellipse 1131 (2).png';
import Review from "./Review";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
const Client = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:<PrevArrow />,
        nextArrow:<NextArrow />,
        responsive: [
            {
                breakpoint: 1399, // Adjust the breakpoint value as needed
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 991, // Adjust the breakpoint value as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            
        ],
    };
    return (
        <>
            <section className="client">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <p className="text-center gilroy-bold client-heading text-orange text-uppercase">Testimonials</p>
                            <h1 className="text-center gilroy-bold">Our Client Reviews</h1>
                        </Col>
                    </Row>
                    <Row className="gx-5 m-0 pt-5">
                        <Slider {...settings}>
                            <Col xs={4} className="client-1 align-end pb-3">
                                <div className="client-details">
                                    <div className="flex-center">
                                        <div className="client-img-wrapper flex-center">
                                            <img className="img-fluid" src={client1} alt="client1" />
                                        </div>
                                    </div>
                                    <h6 className="text-center gilroy-bold mt-2 mb-1">Bang Upin</h6>
                                    <p className="text-center">Pedagang Asongan</p>
                                    <p className="text-center">
                                        “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“
                                    </p>
                                    <Review />
                                </div>
                            </Col>
                            <Col xs={4} className="client-2 align-end pb-3">
                                <div className="client-details">
                                    <div className="flex-center">
                                        <div className="client-img-wrapper flex-center">
                                            <img className="img-fluid" src={client2} alt="client1" />
                                        </div>
                                    </div>
                                    <h6 className="text-center gilroy-bold mt-2 mb-1">Ibuk Sukijan</h6>
                                    <p className="text-center">Ibu Rumah Tangga</p>
                                    <p className="text-center">
                                        “Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“
                                    </p>
                                    <Review />
                                </div>
                            </Col>
                            <Col xs={4} className="client-3 align-end pb-3">
                                <div className="client-details">
                                    <div className="flex-center">
                                        <div className="client-img-wrapper flex-center">
                                            <img className="img-fluid" src={client3} alt="client1" />
                                        </div>
                                    </div>
                                    <h6 className="text-center gilroy-bold mt-2 mb-1">Mpok Ina</h6>
                                    <p className="text-center">Karyawan Swasta</p>
                                    <p className="client-desc text-center">
                                        “Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“
                                    </p>
                                    <Review />
                                </div>
                            </Col>
                            <Col xs={4} className="client-3 align-end pb-3">
                                <div className="client-details">
                                    <div className="flex-center">
                                        <div className="client-img-wrapper flex-center">
                                            <img className="img-fluid" src={client3} alt="client1" />
                                        </div>
                                    </div>
                                    <h6 className="text-center gilroy-bold mt-2 mb-1">Mpok Ina</h6>
                                    <p className="text-center">Karyawan Swasta</p>
                                    <p className="client-desc text-center">
                                        “Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“
                                    </p>
                                    <Review />
                                </div>
                            </Col>
                        </Slider>
                    </Row>
                </Container>
            </section>
        </>
    )
}


export default Client;