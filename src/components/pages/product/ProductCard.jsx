export default function ProductCard({ product }) {
  return (
    <article className="product-card h-100">
      <div className="product-card-image-wrap">
        {product.badge ? <span className="product-badge">{product.badge}</span> : null}
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="product-card-body">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-subtitle">{product.subtitle}</p>
        <p className="product-card-price">{product.price}</p>
        <button type="button" className="product-add-btn">
          ADD
        </button>
      </div>
    </article>
  );
}
