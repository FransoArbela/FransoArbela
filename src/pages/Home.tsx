import '../styles/home.scss';

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home__intro">
        <h1 className="home__title">Hey, I'm Samal 👋</h1>
        <p className="home__subtitle">
          I build beautiful, blazing-fast websites with React & TypeScript.
        </p>
        <a href="#projects" className="home__cta">
          See my work 🚀
        </a>
      </div>
    </section>
  );
}
