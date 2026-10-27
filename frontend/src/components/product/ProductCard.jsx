import { businessInfo } from '../../data/siteContent';

function ProductCard({ product }) {
  const inquiryUrl = `${businessInfo.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in ${product.name}. Could you share current availability and wholesale pricing?`)}`;

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
        <span className="product-number" aria-hidden="true">
          {String(product.id).padStart(2, '0')}
        </span>
        {product.newArrival && <span className="badge">New</span>}
      </div>

      <div className="product-card-body">
        <div className="product-meta">
          <span>{product.category}</span>
          <span>{product.label}</span>
        </div>

        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-specs">
          <div><span>Fabric</span><strong>{product.material}</strong></div>
          <div><span>Size ratio</span><strong>{product.sizes.join(', ')}</strong></div>
        </div>

        <div className="product-card-footer">
          <span>{product.price}</span>
          <a className="button button-whatsapp product-inquiry" href={inquiryUrl} target="_blank" rel="noreferrer">
            Inquire on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
