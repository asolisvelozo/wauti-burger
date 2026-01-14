import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        {/* Usamos Link en vez de <a> para no recargar */}
        <Link className="navbar-brand" to="/">🍔 WAUTI</Link>
        
        <div className="navbar-nav ms-auto d-flex flex-row gap-3">
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/registro">Registro</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

