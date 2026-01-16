import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del usuario:", formData); 
    alert("¡Cuenta creada con éxito! Ahora iniciá sesión.");
    navigate("/login"); 
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        
        <h2 className="text-center mb-4 fw-bold">Crear Cuenta</h2>
        
        <form onSubmit={handleSubmit}>
          

          <div className="mb-3">
            <label className="form-label">Nombre Completo</label>
            <input 
              type="text" 
              name="nombre"
              className="form-control" 
              placeholder="Tu nombre"
              onChange={handleChange}
              required 
            />
          </div>

    
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              name="email"
              className="form-control" 
              placeholder="ejemplo@correo.com"
              onChange={handleChange}
              required 
            />
          </div>

        
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input 
              type="password" 
              name="password"
              className="form-control" 
              placeholder="Crea una contraseña"
              onChange={handleChange}
              required 
            />
          </div>

          <button type="submit" className="btn btn-success w-100">Registrarme</button>
        </form>

        <hr className="my-4" />
        
        <p className="text-center">
          ¿Ya tenés cuenta? <Link to="/login">Iniciá sesión</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;