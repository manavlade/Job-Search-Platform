import Job from "./Job";
import Navbar from "./shared/Navbar";

const jobsArrays = [1, 2, 3, 4, 5, 6, 7, 8];


const BrowseJobs = () => {
    return (
        <>
        <div>
            <Navbar/>
            <div className=" max-w-7xl mx-auto py-10 justify-center sm:justify-center lg:my-10" >
                    <h1  className=" font-semibold text-2xl" >Search Results: <span className=" text-purple-700" >{jobsArrays.length}</span> </h1>
                    <div className=" grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3" >
                        {
                            jobsArrays.map((item, index) => {
                                return (
                                    <Job />
                                )
                            })
                        }
                </div>
            </div>
        </div>
        </>
    )
}

export default BrowseJobs;