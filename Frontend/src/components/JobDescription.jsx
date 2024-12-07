import Navbar from "./shared/Navbar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
    const isApplied = false;
    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                <Navbar />
                <div className="max-w-5xl mx-auto my-10">
                    {/* Job Header */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
                        {/* Job Info */}
                        <div>
                            <h1 className="font-extrabold text-3xl text-gray-800">Frontend Developer</h1>
                            <div className="flex flex-wrap items-center gap-3 mt-4">
                                <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium text-sm">
                                    5 Openings
                                </Badge>
                                <Badge className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium text-sm">
                                    Full Time
                                </Badge>
                                <Badge className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium text-sm">
                                    24 LPA
                                </Badge>
                            </div>
                        </div>
                        {/* Apply Button */}
                        <div>
                            <Button
                                disabled={isApplied}
                                className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 
                                    ${isApplied
                                        ? "bg-purple-500 text-white cursor-not-allowed"
                                        : "bg-red-500 text-white hover:bg-red-600"
                                    }`}
                            >
                                {isApplied ? "Already Applied" : "Apply Now"}
                            </Button>
                        </div>
                    </div>

                    {/* Job Details */}
                    <div className="mt-10 bg-white shadow-md rounded-lg border border-gray-200 p-8 space-y-8">
                        {/* About the Company */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                About The Company
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                XYZ Tech is a leading technology company known for its innovative solutions in web and mobile development.
                            </p>
                        </div>

                        {/* Job Description */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                Job Description
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                As a Frontend Developer, you will be responsible for implementing designs, optimizing user interfaces, and ensuring seamless functionality across devices.
                            </p>
                        </div>

                        {/* Requirements */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                Requirements
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Proficiency in React.js and Tailwind CSS.</li>
                                <li>Strong understanding of RESTful APIs.</li>
                                <li>Excellent problem-solving skills.</li>
                                <li>Ability to collaborate with cross-functional teams.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobDescription;
