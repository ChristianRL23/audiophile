import headphones from './image-xx99-mark-two-headphones.jpg';
import CategoryGridItem from '../../components/CategoryGridItem/CategoryGridItem';
import './CategoryGrid.scss';

const CategoryGrid = () => {
  return (
    <section className="category-grid">
      <CategoryGridItem
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur
            adipisci ratione illo ducimus fugiat impedit soluta iure, ab enim
            amet cumque in aspernatur ipsam itaque facilis quas sed molestias!"
        name="XX99 Mark II Headphones"
        image={headphones}
        isNew
      />
    </section>
  );
};

export default CategoryGrid;
