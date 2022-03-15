import data from './../../data/data.json';
import headphones from './image-xx99-mark-two-headphones.jpg';
import CategoryGridItem from '../../components/CategoryGridItem/CategoryGridItem';
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
          <CategoryGridItem
            key={product.id}
            name={product.name}
            description={product.description}
            image={headphones}
            isNew={product.new}
            direction={direction}
          />
        );
      })}
    </section>
  );
};

export default CategoryGrid;
