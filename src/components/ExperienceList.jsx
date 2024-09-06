import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ExperienceCard } from "."
import { experienceData } from "@/data/experienceData"

export const ExperienceList = () => {

    return (
        <Carousel className="max-w-screen-md w-full px-3 py-3">
          <CarouselContent>
            {experienceData.map ( (experience, index) => (
                <CarouselItem key={ index }>
                <div className="p-1 ">
                  <ExperienceCard {...experience}/>
                </div>
              </CarouselItem>
            ) )}
           
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )
  
}


