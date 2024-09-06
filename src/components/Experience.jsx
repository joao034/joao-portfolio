import { ExperienceCard, SectionTittle, ExperienceList } from "."

export const Experience = () => {
  return (
    <div className="h-auto flex flex-col items-center py-8 bg-slate-900">

      <SectionTittle number="02" title="Experiencia" />

      <ExperienceList />

      <div className="max-w-screen-md w-full px-4 py-6 flex flex-col items-center">
          <ExperienceCard />
      </div>
    </div>

  )
}
