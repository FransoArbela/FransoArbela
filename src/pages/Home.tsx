import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import '../styles/home.scss';
import '../styles/projects.scss';
import '../styles/footer.scss';
export default function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="home__intro">
          <h1 className="home__title">Hey, I'm Samal 👋</h1>
          <p className="home__subtitle">
            I build beautiful, blazing-fast websites with React & TypeScript.
          </p>
        </div>
      </section>
      <section className="projects" id="projects">
        <div className="projects__container">
          <ProjectCard />
        </div>
      </section>
      <Footer />
    </>
  );
}
