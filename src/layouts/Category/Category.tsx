import CategoryHeader from '../../components/CategoryHeader/CategoryHeader';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import About from '../About/About';
import CategoryGrid from '../CategoryGrid/CategoryGrid';
import ProductsCategory from '../ProductsCategory/ProductsCategory';
import './Category.scss';

const Category = () => {
  return (
    <>
      <Header />
      <CategoryHeader categoryName="HEADPHONES" />
      <CategoryGrid />
      <ProductsCategory />
      <About />
      <Footer />
    </>
  );
};

export default Category;
