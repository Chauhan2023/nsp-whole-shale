import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <img src={category.image} alt={category.name} />
      <div className="category-overlay">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
