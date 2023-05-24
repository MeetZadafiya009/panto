import './home.scss';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Main from "../../components/Main";
import Facility from "../../components/Facility";
import Product from "../../components/Product";
import Experience from "../../components/Experience";
import Material from "../../components/Material";
import Client from "../../components/Client";
const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <Facility />
            <Product />
            <Experience />
            <Material />
            <Client />
            <Footer/>
        </>
    )
}

export default Home;