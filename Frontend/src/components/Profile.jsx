import { Contact, Mail, Pen } from "lucide-react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobs from "./AppliedJobs";

const Skills = ["HTMl", "CSS", "Javascript", "React.js", "Node.js", "Express.js", "MongoDB"];

const Profile = () => {
    const isResume = true;
    return (
        <>
            <div>
                <Navbar />
                <div className="max-w-5xl mx-auto bg-white border border-gray-100 rounded-2xl my-5 p-8" >
                    <div className=" flex justify-between" >
                        <div className=" flex items-center gap-5" >
                            <div>
                                <Avatar>
                                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcyosA3Bq3y4UQhBc76lKnNuVMU-c-X-OZw&s" />
                                </Avatar>
                            </div>
                            <div>
                                <h2>Name</h2>
                                <p>Users Bio</p>
                            </div>
                        </div>
                        <Button className=" hover:bg-gray-100" variant="outline" >
                            <Pen />
                        </Button>
                    </div>

                    <div className=" my-5" >
                        <div className=" flex items-center gap-5 my-2" >
                            <Mail />
                            <span>User1@gmail.com</span>
                        </div>
                        <div className=" flex items-center gap-5" >
                            <Contact />
                            <span>9148846851</span>
                        </div>
                    </div>
                    <div className=" my-2" >
                        <h3>Skills</h3>
                        <div className=" gap-3 flex items-center" >
                            {
                                Skills.length !== 0 ?
                                    Skills.map((item, index) => (
                                        <Badge className="bg-purple-500 gap-5" key={index}>
                                            {item}
                                        </Badge>
                                    )) :
                                    <span>NA</span>
                            }
                        </div>

                        <div className=" grid w-full max-w-sm items-center gap-1.5" >
                            <Label>Resume</Label>
                            {
                                isResume ? <a target="blank" href="www.google.com" className=" text-blue-700 w-full hover:underline cursor-pointer" >User.Resume</a> : <span>NA</span>
                            }
                        </div>

                    </div>
                </div>

                <div className=" max-w-5xl bg-white rounded-2xl mx-auto" >
                    <AppliedJobs/>
                </div>
            </div>
        </>
    )
}

export default Profile;