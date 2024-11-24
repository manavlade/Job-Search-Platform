import React from "react";
import { Badge } from "./ui/badge";

const CardData = () => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
                <h1 className="text-xl font-semibold text-gray-800">Company Name</h1>
                <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolorum? Tenetur
                </p>
            </div>

            <div className="mb-4">
                <h1 className="text-lg font-medium text-gray-700">Job Title</h1>
                <p className="text-sm text-gray-500">Lorem ipsum dolor</p>
            </div>

            <div className="flex flex-wrap  items-center justify-center gap-2 mt-3">
                <Badge className="bg-white text-blue-700 px-3 py-1 rounded-full font-bold text-xs">5 Openings</Badge>
                <Badge className="bg-white text-red-700 px-3 py-1 rounded-full font-bold text-xs">Full Time</Badge>
                <Badge className="bg-white text-purple-700 px-3 py-1 rounded-full font-bold text-xs">24 LPA</Badge>
            </div>
        </div>
    );
};

export default CardData;
