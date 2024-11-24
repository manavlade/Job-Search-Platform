import { CarouselItem } from "react-bootstrap";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";

const CategoryCarousel = () => {
    const jobTypes = [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Software Engineer",
        "Cloud Engineer",
        "Salesforce Developer"
    ];

    return (
        <div className="md:m-28">
            <Carousel className="max-w-xl mx-auto my-20">
                <CarouselContent>
                    {jobTypes.map((cat, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                            <Button
                            variant="link"
                            >
                                {cat}
                            </Button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default CategoryCarousel;
