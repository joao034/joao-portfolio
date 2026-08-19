import { SectionTittle } from "."

export const About = () => {

  const about = `Desarrollador de Software con 2 años de experiencia. Me especializo en crear soluciones a través de tecnologías como Python, Laravel y React. Apasionado por mejorar la experiencia del usuario mediante la creación de aplicaciones escalables y de alto rendimiento. Busco nuevos desafíos donde pueda aplicar mis conocimientos en desarrollo backend, frontend e integración de soluciones con IA para agregar valor en proyectos dinámicos.`

  return (
    <div id="aboutMe" className="h-auto flex flex-col items-center py-8 bg-slate-900 px-6">
      <SectionTittle number="01" title="Acerca de mí" />

      <div className="max-w-screen-md w-full px-4 py-6 flex flex-col items-center">
        <p className="text-gray-400 text-justify">
          {about}
        </p>
      </div>
    </div>

  )
}

