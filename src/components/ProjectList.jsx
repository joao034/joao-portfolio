import {projectsData} from '@/data/projectsData'
import { ProjectCard } from '.'

export const ProjectList = () => {


  return (
    <div className="max-w-screen-md w-full px-6 space-y-6 flex flex-col items-center py-8 bg-slate-900">
      
      {projectsData.map( ( project, index ) => (
        <ProjectCard key={ index } { ...project }/>
      ) )}

    </div>
  )
}

