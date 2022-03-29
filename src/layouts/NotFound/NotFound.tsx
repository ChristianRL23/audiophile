import CategoryHeader from '../../components/CategoryHeader/CategoryHeader';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import About from '../About/About';
import ProductsCategory from '../ProductsCategory/ProductsCategory';

const NotFound = () => {
  return (
    <section>
      <Header />
      <CategoryHeader categoryName="PAGE NOT FOUND" />
      <ProductsCategory />
      <About />
      <Footer />
    </section>
  );
};

export default NotFound;
