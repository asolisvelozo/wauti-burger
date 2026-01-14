import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Link para ir a Registro, useNavigate para redireccionar

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (email && password) {
      alert("¡Bienvenido/a de nuevo! 🍔");
      navigate("/"); 
      alert("Por favor completá todos los campos");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        
        <h2 className="text-center mb-4 fw-bold">Iniciar Sesión</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Entrar</button>
        </form>

        <hr className="my-4" />
        
        <p className="text-center">
          ¿No tenés cuenta? <Link to="/registro">Registrate acá</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;