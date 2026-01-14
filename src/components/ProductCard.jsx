import { Link } from 'react-router-dom';

function ProductCard({ producto }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        {/* Imagen con ajuste para que queden todas iguales */}
        <img 
            src={producto.image} 
            className="card-img-top" 
            alt={producto.name} 
            style={{ height: "200px", objectFit: "cover" }}
        />
        
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{producto.name}</h5>
          <p className="card-text text-muted">{producto.category}</p>
          <h4 className="card-text mb-3">${producto.price}</h4>
          
          {/* Lógica de Stock */}
          <div className="mb-3">
            {producto.stock === 0 ? (
                <span className="badge bg-danger">Agotado</span>
            ) : (
                <span className="badge bg-success">Stock: {producto.stock}</span>
            )}
          </div>

          <Link to={`/producto/${producto.id}`} className="btn btn-warning mt-auto fw-bold">
            Ver Detalle
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;