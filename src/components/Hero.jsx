import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">
        Aprende <span className="hero-highlight">React</span> desde cero
      </h1>

      <p className="hero-subtitle">
        Domina la librería más popular del frontend con proyectos prácticos y reales.
      </p>

      <button className="hero-button">
        Ver Cursos
      </button>
    </section>
  );
}

export default Hero;