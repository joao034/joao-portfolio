import { ArrowUpRight, Download } from "lucide-react"
import { Button } from "./ui/button"
import { SectionTittle } from "."

const CV_URL = 'https://docs.google.com/document/d/1WivZ7yXWg10b0-wAeSTXi48rEDJI2LgH6FW2OQjZxQU/edit?usp=sharing'
const email = 'joaojacomedev@gmail.com'

export const Hero = () => {
    return (
        <section className="h-auto w-full bg-slate-900 flex flex-col justify-center items-center py-12 px-6">
            <h1 className="text-6xl font-bold text-gray-200">Soy Joao Jacome</h1>
            <h2 className="mt-4 text-6xl font-bold text-teal-700">Ingeniero de Software</h2>

            <div className="flex mt-8">
                <span className="text-gray-500 text-xl">Me especializo desarrollo de aplicaciones web con Laravel y React</span>
            </div>

            <div className="flex flex-col space-y-1 sm:flex-row sm:space-x-4 sm:space-y-0 w-full max-w-md mx-auto">
                <a href={CV_URL} target="_blank" className="w-full">
                    <Button className="mt-8 bg-teal-600 text-slate-900 hover:bg-teal-900 w-full">
                        <Download className="w-5 h-5 mr-2" />
                        Resume
                    </Button>
                </a>

                <a href={`mailto:${email}`} target="_blank" className="w-full">
                    <Button className="mt-8 bg-teal-600 text-slate-900 hover:bg-teal-900 w-full">
                        <ArrowUpRight className="w-5 h-5 mr-2" />
                        Contáctame
                    </Button>
                </a>
            </div>

        </section>

    )
}



