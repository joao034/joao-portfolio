import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { Badge } from "./ui/badge"


export const ExperienceCard = ({
    logo,
    company,
    role,
    date,
    activities,
    technologies }) => {

    return (
        <Card className="max-w-screen-md bg-gray-800 w-full border-none">
            <CardHeader className="flex flex-col">
                {/* <img className="w-5" src="/assets/react.svg" alt="" /> */}
                <CardTitle className="text-gray-300 ">{company}</CardTitle>
                <div className="flex justify-between">
                    <CardDescription className="text-gray-400 font-bold">{role}</CardDescription>
                    <CardDescription className="text-gray-400 font-bold">{date}</CardDescription>
                </div>

            </CardHeader>
            <CardContent>

                {activities?.map((activity, index) => (
                    <div key={index} className="flex flex-row py-2 space-x-2">
                        <ChevronRight className="w-5 text-teal-700" /><p className="text-gray-300 text-justify">{activity}</p>
                    </div>
                ))}

            </CardContent>
            <CardFooter className="space-x-2">

                {technologies?.map((technology, index) => (
                    <Badge key={index} className="text-teal-600 bg-gray-900">{technology}</Badge>
                ))}

            </CardFooter>
        </Card>

    )
}

