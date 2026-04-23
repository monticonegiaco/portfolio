import Stack from "./components/stack";
export default function Home() {
  return (
    <div className="min-h-screen bg-(--background) text-(--foreground)">
      <section id="hero" className="border-b  p-4">
        <div>Técnico Superior en Computación</div>
        <h1>Hola, soy Giaco Monticone.</h1>
        <p>
          Desarrollador apasionado por construir soluciones tecnológicas. Recién
          graduado, con experiencia en proyectos académicos de software, redes y
          sistemas.
        </p>
      </section>
      <section id="stack">
        <h1>STACK</h1>
        <Stack />
      </section>
      <section id="projects">
        <h1>PROJECTS</h1>
      </section>
      <section id="about">
        <h1>ABOUT</h1>
      </section>
      <section id="contact">
        <h1>CONTACT</h1>
      </section>
    </div>
  );
}
