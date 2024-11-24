import { Search } from "lucide-react";
import { Input } from "./ui/input";


const HeroSection = () => {
    return (
        <>
            <div className=" items-center mt-10 text-center" >
                <div className=" flex flex-col gap-5 my-10">
                    <div>
                        <span className=" text-xl px-4 py-2 rounded-full bg-gray-100 font-medium text-red-600" >
                            #1 Job Portal,
                        </span>
                    </div>
                    <h1 className=" text-5xl font-bold" >Search, Apply &  <br /> Get Your <span className=" text-purple-700">Dream Job</span> </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Repellat nisi mollitia officia qui iusto aut ipsam voluptates omnis,
                        incidunt ducimus aliquam consectetur recusandae eaque beatae quam vel atque molestiae.
                        Sapiente.
                    </p>
                </div>
                <div className="flex items-center mx-auto gap-3 border border-gray-300 shadow-md rounded-full w-[40%] p-2 bg-white hover:shadow-lg transition-shadow duration-200">
                    <Input
                        type="text"
                        placeholder="Enter Job Title"
                        className="flex-1 px-4 py-2 text-gray-700 outline-none rounded-full focus:ring-2 focus:ring-purple-500 transition duration-150"
                    />
                    <button className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors duration-200">
                        <Search className="text-white w-5 h-5" />
                    </button>
                </div>

            </div>
        </>
    )
}

export default HeroSection;