import './CategoryHeader.scss';

interface CategoryHeaderProps {
  categoryName: string;
}

const CategoryHeader = ({ categoryName }: CategoryHeaderProps) => {
  return (
    <div className="category-header">
      <h3>{categoryName}</h3>
    </div>
  );
};

export default CategoryHeader;
