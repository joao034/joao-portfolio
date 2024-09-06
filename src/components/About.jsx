import { SectionTittle } from "."

export const About = () => {
  return (
    <div className="h-auto flex flex-col items-center py-8 bg-slate-900">
      <SectionTittle number="01" title="About" />

      <div className="max-w-screen-md w-full px-4 py-6 flex flex-col items-center">
        <p className="text-gray-400 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ratione officia asperiores explicabo quas obcaecati possimus reprehenderit, nobis id eius optio tempore dicta illum ex ab voluptas commodi a nemo!
        </p>
      </div>
    </div>

  )
}

