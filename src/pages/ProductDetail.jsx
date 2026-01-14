import { useParams } from 'react-router-dom'; 
import { productsMock } from '../data/products'; 

function ProductDetail() {
  const { id } = useParams(); 
  
  const producto = productsMock.find((p) => p.id === parseInt(id));

  if (!producto) {
    return <h2 className="text-center mt-5">¡Producto no encontrado! 😢</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="card mb-3 shadow">
        <div className="row g-0">
          
          <div className="col-md-6">
            <img 
              src={producto.image} 
              className="img-fluid rounded-start" 
              alt={producto.name} 
              style={{ width: "100%", height: "500px", objectFit: "cover" }}
            />
          </div>
          
          <div className="col-md-6 d-flex align-items-center">
            <div className="card-body">
              
              <h1 className="card-title display-5 fw-bold">{producto.name}</h1>
              
              <p className="text-muted mb-4">
                Código de producto: <span className="fw-bold">{producto.code}</span>
              </p>
              
              <p className="card-text fs-5">{producto.description}</p>

              <hr />

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-success m-0">${producto.price}</h2>
                
                {producto.stock > 0 ? (
                    <span className="badge bg-primary fs-6">Stock: {producto.stock} u.</span>
                ) : (
                    <span className="badge bg-danger fs-6">Sin Stock</span>
                )}
              </div>
              
              <button className="btn btn-dark btn-lg w-100">
                Añadir al Carrito 🛒
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;