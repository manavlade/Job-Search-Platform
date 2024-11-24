import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";

const filterData = [
    {
        filterType: "Location",
        array: ["Mumbai", "Pune", "Bangalore"]
    },
    {
        filterType: "Salary",
        array: ["0-40", "40-60", "60+"]
    },
    {
        filterType: "Job Type",
        array: ["Full Time", "Internship", "Remote"]
    },
];

const FilterCard = () => {
    return (
        <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h1 className="font-bold text-2xl text-purple-700 mb-6 text-center">Filter Options</h1>
            <Accordion type="single" collapsible>
                {filterData.map((data, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-none">
                        <AccordionTrigger className="flex items-center justify-between py-3 text-lg font-semibold  hover:text-purple-700 transition-colors duration-200">
                            {data.filterType}
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 pb-4">
                            <RadioGroup>
                                {data.array.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2 my-2">
                                        <RadioGroupItem
                                            id={`${data.filterType}-${item}`}
                                            value={item}
                                            className="h-5 w-5 text-purple-700 border-gray-300 focus:ring-purple-500"
                                        />
                                        <Label htmlFor={`${data.filterType}-${item}`} className=" font-bold text-sm">
                                            {item}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <Button 
            className=" bg-purple-700 text-white hover:bg-white hover:text-purple-700 m-5 "
             >
                Apply Filters
            </Button>
        </div>
    );
}

export default FilterCard;
