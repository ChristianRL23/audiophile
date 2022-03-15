import Header from '../../components/Header/Header';
import About from '../About/About';
import Hero from '../Hero/Hero';
import ProductsCategory from '../ProductsCategory/ProductsCategory';
import './Home.scss';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ProductsCategory />
      <About />
    </>
  );
};

export default Home;
