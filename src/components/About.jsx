import { SectionTittle } from "."

export const About = () => {

  const about = `Desarrollador de Software con cerca de 2 años de experiencia en el desarrollo de aplicaciones web, con conocimientos en Laravel y .NET para el backend y React JS para el frontend. Apasionado por crear soluciones eficientes y escalables que mejoren la experiencia del usuario y optimicen procesos. Busco nuevos desafíos en un entorno dinámico donde pueda continuar creciendo y aportando valor.`

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

