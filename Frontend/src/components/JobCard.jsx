import React from "react";
import CardData from "./CardData";
import { Button } from "./ui/button";
import { Link, Router } from "react-router-dom";

const LatestJobCard = () => {
    const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            <div className=" max-w-7xl mx-auto my-20 text-center" >
                <h1 className=" text-4xl font-bold" >
                    Latest & Top

                    <span className=" text-purple-700 pl-2" >
                        Job Openings
                    </span>
                </h1>
                <div className=" pt-10 grid md:grid-cols-3 sm:grid-cols-1 gap-5 " >
                    {
                        randomJobs.slice(0, 6).map((item, index) => <CardData />)
                    }
                </div>
                <div className=" m-5" >
                    <Link to="/jobs">
                        <Button
                            className="bg-purple-700 text-white hover:bg-white hover:text-purple-700 rounded-3xl"
                        >
                            View More
                        </Button>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default LatestJobCard;