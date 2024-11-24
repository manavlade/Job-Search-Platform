import { Bookmark, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
    return (
        <div className="p-6 m-5 rounded-xl bg-white border border-gray-200 shadow-lg transition-shadow hover:shadow-2xl">
            <div className="flex items-center justify-between mb-4 text-gray-500 text-sm">
                <p className=" flex gap-5" > <Clock/> 3 Days Ago</p>
                <Button
                    className="rounded-full text-gray-400 hover:text-purple-600"
                    size="icon"
                    variant="ghost">
                    <Bookmark />
                </Button>
            </div>

            {/* Company Logo and Info */}
            <div className="flex items-center gap-4 mb-4">
                <Avatar className="bg-gray-100 p-2 rounded-full shadow-sm">
                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcyosA3Bq3y4UQhBc76lKnNuVMU-c-X-OZw&s" />
                </Avatar>
                <div>
                    <h2 className="text-lg font-bold text-gray-800">Company Name</h2>
                    <p className="text-gray-500 text-sm">India</p>
                </div>
            </div>

            {/* Job Title and Description */}
            <div>
                <h1 className="font-semibold text-xl text-gray-900 mb-2">Job Title</h1>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero velit ratione aspernatur neque repellendus fugit beatae animi possimus, illo aperiam?
                </p>
            </div>

            <div className="flex flex-wrap  items-center justify-center gap-2 mt-2">
                <Badge className="bg-white text-blue-700 px-3 py-1 rounded-full font-bold text-xs">5 Openings</Badge>
                <Badge className="bg-white text-red-700 px-3 py-1 rounded-full font-bold text-xs">Full Time</Badge>
                <Badge className="bg-white text-purple-700 px-3 py-1 rounded-full font-bold text-xs">24 LPA</Badge>
            </div>
            <div className=" flex items-center mt-2 justify-center" >
                <Button 
                className= " bg-purple-700 text-white hover:bg-white hover:text-purple-700"
                >
                    Details
                </Button>
            </div>
        </div>
    );
}

export default Job;
