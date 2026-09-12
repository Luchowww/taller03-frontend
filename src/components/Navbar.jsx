import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ReactAcademy</div>
      
       <div className="navbar-links">
            <a href="#">Inicio</a>
            <a href="#">Cursos</a>
            <a href="#">Nosotros</a>
        </div> 
    </nav>
  );
}

export default Navbar;