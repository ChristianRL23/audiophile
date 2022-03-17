import data from './../../data/data.json';
import ProductItem from '../../components/ProductItem/ProductItem';
import './CategoryGrid.scss';
import { ProductModel } from '../../models';
import { useParams } from 'react-router-dom';

const CategoryGrid = () => {
  const params = useParams();
  const productsData: ProductModel[] = data;
  let productsOfThisCategory = productsData.filter(
    (product) => product.category === params.category
  );
  productsOfThisCategory = productsOfThisCategory.sort(
    (a: any, b: any) => b.new - a.new
  );

  return (
    <section className="category-grid">
      {productsOfThisCategory.map((product, index) => {
        let direction: 'right' | 'left';
        if (index === 0) {
          direction = 'right';
        } else if (index % 2 === 0) {
          direction = 'right';
        } else {
          direction = 'left';
        }
        return (
          <ProductItem
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.image.desktop}
            isNew={product.new}
            direction={direction}
            gridItem={true}
            slug={product.slug}
          />
        );
      })}
    </section>
  );
};

export default CategoryGrid;
