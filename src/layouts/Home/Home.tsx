import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import About from '../About/About';
import Hero from '../Hero/Hero';
import ProductsCategory from '../ProductsCategory/ProductsCategory';
import ProductsGrid from '../ProductsGrid/ProductsGrid';
import './Home.scss';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ProductsCategory />
      <ProductsGrid />
      <About />
      <Footer />
    </>
  );
};

export default Home;
