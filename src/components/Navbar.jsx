import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        {/* LOGO (Lleva al Inicio) */}
        <Link className="navbar-brand" to="/">🍔 WAUTI</Link>
        
        {/* Botón de 3 rayitas para Celular (Responsive) */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido del Menú */}
        <div className="collapse navbar-collapse" id="navbarNav">
          
          {/* PARTE IZQUIERDA: Navegación Principal */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              {/* Este lleva a donde están las hamburguesas */}
              <Link className="nav-link" to="/productos">Menú</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre-nosotros">Nosotros</Link>
            </li>
          </ul>

          {/* PARTE DERECHA: Login y Registro */}
          <div className="navbar-nav ms-auto">
             <Link className="nav-link" to="/login">Login</Link>
             <Link className="nav-link" to="/registro">Registro</Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;