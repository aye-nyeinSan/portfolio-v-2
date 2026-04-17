import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export  function ProjectsCarousel() {
    return (
      <>
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-xs mt-20"
        >
          <CarouselContent className="-mt-1 h-[270px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 pt-1">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/*  hint */}
        <p className="mt-20 text-sm text-brand-text-secondary">
         Click to see details
        </p>
      </>
    );
}