import { ProjectCard, ProjectList, SectionTittle } from "."

export const ProjectsSection = () => {
  return (
    <div className="h-auto flex flex-col items-center py-8 bg-slate-900">
      <SectionTittle number="03" title="Proyectos" />
      
      <ProjectList />

    </div>

  )
}

