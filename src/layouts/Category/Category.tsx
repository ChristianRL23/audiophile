import { useParams } from 'react-router-dom';
import CategoryHeader from '../../components/CategoryHeader/CategoryHeader';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import About from '../About/About';
import CategoryGrid from '../CategoryGrid/CategoryGrid';
import ProductsCategory from '../ProductsCategory/ProductsCategory';
import './Category.scss';

const Category = () => {
  const params = useParams();
  const availableCategories = ['earphones', 'headphones', 'speakers'];
  const validCategory = availableCategories.find(
    (category) => category === params.category
  );

  return validCategory ? (
    <>
      <Header />
      <CategoryHeader categoryName={params.category!} />
      <CategoryGrid />
      <ProductsCategory />
      <About />
      <Footer />
    </>
  ) : (
    <p>404</p>
  );
};

export default Category;
