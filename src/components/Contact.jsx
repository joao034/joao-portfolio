import { SectionTittle } from "."
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { profileData } from '@/data/heroData'
import { MailCheckIcon, MailIcon, MailMinus } from "lucide-react"

export const Contact = () => {
  return (
    <div id="contact" className="h-auto flex flex-col items-center py-8 bg-slate-900">

      <SectionTittle number='04' title='Contacto' />

      <div className="py-8">
        <p className="text-gray-300 font-bold text-3xl text-center p-2">!Pongámonos en contacto!</p>
        <p className="text-teal-700 font-bold text-2xl text-center p-2">joaojacomedev@gmail.com</p>

        <div className="flex py-5 justify-center space-x-4">
          <a href={profileData.linkedIn} target="_blank">
            <LinkedInLogoIcon className="w-8 h-8 fill-current text-gray-300" />
          </a>
          <a href={profileData.github} target="_blank">
            <GitHubLogoIcon className="w-8 h-8 fill-current text-gray-300" />
          </a>

        </div>

      </div>


    </div>
  )
}

