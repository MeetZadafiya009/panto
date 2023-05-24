import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/App.scss';
import Home from './components/home/Home';
import Facility from './components/facility/Facility';
import Product from './components/product/Product';
import Experience from './components/experience/Experience';
import Material from './components/material/Material';
import Client from './components/client/Client';
import Footer from './components/footer/Footer';

function App() {
  return (
      <>
        <Home />
        <Facility />
        <Product />
        <Experience />
        <Material />
        <Client />
        <Footer />
      </>
  );
}

export default App;
