import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProductContent from '../../components/ProductContent/ProductContent';

import About from '../About/About';
import ProductsCategory from '../ProductsCategory/ProductsCategory';
import './Product.scss';

const Product = () => {
  return (
    <>
      <Header />
      <ProductContent />
      <ProductsCategory />
      <About />
      <Footer />
    </>
  );
};

export default Product;
