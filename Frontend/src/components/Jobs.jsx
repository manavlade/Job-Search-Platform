import FilterCard from "./FilterCard";
import Job from "./Job";
import Navbar from "./shared/Navbar";

const jobsArrays = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
    return (
        <>
            <Navbar />
            <div className=" lg:max-w-7xl mx-auto mt-5" >
                <div className=" flex gap-5" >
                    <div className=" w-20&" >
                        <FilterCard />
                    </div>
                    {
                        jobsArrays.length <= 0 ? <span>No Job Found</span> : (
                            <div className=" flex-1 h-[88vh] overflow-y-auto pb-5">
                                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    {
                                        jobsArrays.map((item, index) => (
                                            <div>
                                                <Job/>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )

                    }
                </div>
            </div>
        </>
    )
}
export default Jobs;