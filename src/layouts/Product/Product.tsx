import data from './../../data/data.json';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProductContent from '../../components/ProductContent/ProductContent';
import About from '../About/About';
import ProductsCategory from '../ProductsCategory/ProductsCategory';
import './Product.scss';
import { ProductModel } from '../../models';
import { useLocation } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

const Product = () => {
  const productData: ProductModel[] = data;
  const location = useLocation();
  const productFinded = productData.find(
    (product) => product.slug === location.pathname
  );

  return productFinded ? (
    <>
      <Header />
      <ProductContent />
      <ProductsCategory />
      <About />
      <Footer />
    </>
  ) : (
    <NotFound />
  );
};

export default Product;
