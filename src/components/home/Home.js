import { Col, Container, Row } from "react-bootstrap";
import './home.scss';
import Appbar from "../Navbar/Appbar";
import search from './../../assets/images/Frame 48095395 (1).png';
const Home = () => {
    return (
        <>
            <section className="main">
                <Appbar />
                <div className="py-5">

                </div>
                <div className="content">
                    <Container>
                        <Row className="flex-center">
                            <Col className="px-sm-0 px-5" sm={10}>
                                <h1 className="text-white hero-heading text-center mt-2 display-2 gilroy-bold">Make your interior more minimalistic & modern</h1>
                                <div className="content-text px-5">
                                    <p className="text-center hero-text gilroy-regular text-justify text-white mt-3">
                                        Turn your room with panto into a lot more minimalist <br /> and modern with ease and speed
                                    </p>
                                </div>
                                    <div class="search-box flex-center">
                                        <input className="ms-5 search-input" type="text" placeholder="Search furniture" />
                                        <img className="search" src={search} alt="search" />
                                    </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Home;