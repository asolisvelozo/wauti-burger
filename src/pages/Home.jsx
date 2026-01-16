import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5 text-center">
      <div className="jumbotron p-5 rounded bg-dark text-white">
        <h1 className="display-4">¡Bienvenidos a Wauti Burger! 🍔</h1>
        <p className="lead">Las mejores hamburguesas de la ciudad, ahora online.</p>
        <hr className="my-4 bg-white" />
        
        <div className="mb-4">
          <h3>📍 ¿Dónde estamos?</h3>
          <p>Calle Falsa 123</p>
        </div>

        <div className="d-flex justify-content-center gap-3">
            <Link to="/productos" className="btn btn-warning btn-lg">
              Ver Menú Completo 🍟
            </Link>
            
            <Link to="/sobre-nosotros" className="btn btn-outline-light btn-lg">
              Sobre Nosotros 👨‍🍳
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;