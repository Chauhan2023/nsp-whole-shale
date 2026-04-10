import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.stock === "Low Stock" && <span className="badge low-stock">Low Stock</span>}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">{product.price} <span>{product.unit}</span></p>
        <button className="btn-add">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
