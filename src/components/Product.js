import { Col, Container, Row } from "react-bootstrap";
import product1 from '../assets/images/Group 3742.png';
import product2 from '../assets/images/Group 3742 (1).png';
import product3 from '../assets/images/Group 3742 (2).png';
import product4 from '../assets/images/Group 3742 (3).png';
import plus from '../assets/images/plus.png';
import arrow from '../assets/images/arraow.png';
import Star from "./Star";
import Slider from 'react-slick';
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import { useEffect } from "react";
const Product = () => {
    const settings = {
        dots:false,
        arrow:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1199, // Adjust the breakpoint value as needed
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 991, // Adjust the breakpoint value as needed
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767, // Adjust the breakpoint value as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <section className="py-5  product">
                <Container className=" product-container">
                    <Row >
                        <Col sm={12}>
                            <h2 className="fw-bold gilroy-medium product-title text-center">Best Selling Product</h2>
                        </Col>
                    </Row>
                    <Row className="py-4 justify-content-center">
                        <Col xxl={3} lg={4} md={6} sm={8} xs={10}>
                            <div className="py-1 flex-around d-flex category">
                                <div className="active">Chair</div>
                                <div>Beds</div>
                                <div>Sofa</div>
                                <div>Lamp</div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="card-wrapper m-0 gx-5">
                        <Slider {...settings}>
                            <Col  className="mt-xl-0 mt-5 mb-xl-0 mb-5 px-3 py-5" xs={3}>
                                <div class="card pb-2 product-card border-0">
                                    <div className="flex-center product-wrapper"><img className="img-fluid" src={product1} alt="product" /></div>
                                    <div className="card-body">
                                        <p className="card-text mb-1">Chair</p>
                                        <h5 className="gilroy-bold card-title">Sakarias Armchair</h5>
                                        <Star />
                                        <div className="pt-5 flex-between">
                                            <div>
                                                <h4 className="gilroy-bold"><span className="currency align-top me-1">$</span><span>392</span></h4>
                                            </div>
                                            <div>
                                                <img src={plus} alt='plus' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col  className="mt-xl-0 mt-5 mb-xl-0 mb-5 px-3 py-5" xs={3}>
                                <div class="card pb-2 product-card border-0">
                                    <div className="flex-center product-wrapper">
                                        <img className="img-fluid" src={product2} alt="product2" />
                                    </div>
                                    <div class="card-body">
                                        <p className="card-text mb-1">Chair</p>
                                        <h5 className="gilroy-bold card-title">Baltsar Chair</h5>
                                        <Star />
                                        <div className="pt-5 flex-between">
                                            <div>
                                                <h4 className="gilroy-bold"><span className="currency  align-top me-1">$</span><span>392</span></h4>
                                            </div>
                                            <div>
                                                <img src={plus} alt='plus' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="mt-xl-0 mt-5 mb-xl-0 mb-5 px-3 py-5" xs={3}>
                                <div class="card pb-2 product-card border-0">
                                    <div className="flex-center product-wrapper"><img className="img-fluid" src={product3} alt="product" /></div>
                                    <div className="card-body">
                                        <p style={{ marginBottom: "4px" }} clasName="card-text mb-1">Chair</p>
                                        <h5 className="gilroy-bold card-title">Anjay Chair</h5>
                                        <Star />
                                        <div className="pt-5 flex-between">
                                            <div>
                                                <h4 className="gilroy-bold"><span className="currency align-top me-1">$</span><span>591</span></h4>
                                            </div>
                                            <div>
                                                <img src={plus} alt='plus' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="mt-xl-0 mt-5 mb-xl-0 mb-5 px-3 py-5" xs={3}>
                                <div class="card pb-2 product-card border-0">
                                    <div className="flex-center product-wrapper"><img className="img-fluid" src={product4} alt="product" /></div>
                                    <div className="card-body">
                                        <p className="card-text  mb-1">Chair</p>
                                        <h5 className=" gilroy-bold card-title">Nyantuy Chair</h5>
                                        <Star />
                                        <div className="pt-5 flex-between">
                                            <div>
                                                <h4 className="gilroy-bold"><span className="currency align-top me-1">$</span><span>921</span></h4>
                                            </div>
                                            <div>
                                                <img src={plus} alt='plus' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col  className="mt-xl-0 mt-5 mb-xl-0 mb-5 px-3 py-5" xs={3}>
                                <div class="card pb-2 product-card border-0">
                                    <div className="flex-center product-wrapper">
                                        <img className="img-fluid" src={product2} alt="product2" />
                                    </div>
                                    <div class="card-body">
                                        <p className="card-text  mb-1">Chair</p>
                                        <h5 className="gilroy-bold card-title">Baltsar Chair</h5>
                                        <Star />
                                        <div className="pt-5 flex-between">
                                            <div>
                                                <h4 className="gilroy-bold"><span className="currency align-top me-1">$</span><span>392</span></h4>
                                            </div>
                                            <div>
                                                <img src={plus} alt='plus' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Slider>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="flex-center" md={3} xs={8}>
                            <div>
                                <span className="me-3 text-orange">
                                    View All
                                </span>
                                <span>
                                    <img src={arrow} />
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Product;