import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { TestTubeDiagonal } from "lucide-react"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export const ProjectCard = ({
    image,
    title,
    description,
    links,
    technologies }) => {

    const img = `/img/${image}`

    return (
        <Card className="bg-gray-800 w-full border-none">
            <CardContent className="p-3 rounded-t-md bg-gray-900">
                <img className="w-full h-96 object-contain" src={image ? img : "/placeholderImg.png"} alt="project image" />
            </CardContent>

            <CardHeader className="flex flex-col">
                <CardTitle className="text-gray-300 ">{title}</CardTitle>
                <CardDescription className="text-gray-400 text-justify">{description}</CardDescription>
            </CardHeader>

            <CardFooter className="flex flex-col items-start space-y-6">
                <div className="flex flex-row space-x-2 ">
                    {links.github &&
                        <a href={links?.github} target="_blank">
                            <Button className="bg-teal-600 text-slate-900 hover:bg-teal-900">
                                <GitHubLogoIcon className="w-5 h-5 mr-2" /> {'Github'}</Button>
                        </a>}

                    {links.demo && <a href={links?.demo} target="_blank">
                        <Button className="bg-teal-600 text-slate-900 hover:bg-teal-900">

                            <TestTubeDiagonal className="w-5 h-5 mr-2" /> {'Demo'}

                        </Button></a>}
                </div>

                <div className="flex flex-row space-x-2">

                    {technologies?.map((technology, index) => (
                        <Badge key={index} className="text-teal-600 bg-gray-900">{technology}</Badge>
                    ))}

                </div>

            </CardFooter>
        </Card>
    )
}

