import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [input, setInput] = useState({
        fullName:"",
        email:"",
        phoneNumber:"",
        password:"",
        role:"",
        file:""
    });

    const changeEventHandler = (e) => {
        setInput({...input, [e.target.name]:e.target.value});
    }

    const changeFileHandler = (e) => {
        setInput({...input, file:e.target.file?.[0]});
        //yaha video mei files hai 
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();
        console.log(input);
    }
    return (
       <>
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <form onSubmit={SubmitHandler} className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-semibold text-center text-purple-700 mb-6">Sign Up Now</h1>

                    <div className="space-y-4">
                        <div>
                            <Label className="block text-sm font-medium text-gray-700 mb-1">Full Name</Label>
                            <Input
                                type="text"
                                value={input.fullName}
                                name="fullName"
                                onChange={changeEventHandler}
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <Label className="block text-sm font-medium text-gray-700 mb-1">Email Address</Label>
                            <Input
                                type="email"
                                value={input.email}
                                name="email"
                                onChange={changeEventHandler}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <Label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</Label>
                            <Input
                                type="tel"
                                value={input.phoneNumber}
                                name="phoneNumber"
                                onChange={changeEventHandler}
                                placeholder="123-456-7890"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <Label className="block text-sm font-medium text-gray-700 mb-1">Password</Label>
                            <Input
                                type="tel"
                                value={input.password}
                                name="password"
                                onChange={changeEventHandler}
                                placeholder="Enter Your Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div className=' flex flex-row items-center justify-between' >
                            <RadioGroup className="flex items-center justify-between" defaultValue="comfortable">
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="student"
                                        checked={input.role === 'student'}
                                        onChange={changeEventHandler}
                                        className="cursor-pointer"
                                    />
                                    <Label htmlFor="r1">Student</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="recruiter"
                                        checked={input.role === 'recruiter'}
                                        onChange={changeEventHandler}
                                        className="cursor-pointer"
                                    />
                                    <Label htmlFor="r2">Recruiter</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div >
                            <Label>Profile Photo </Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer mt-2"
                            />
                        </div>

                        <div className="pt-4">
                            <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold py-2 rounded-md hover:from-indigo-500 hover:to-purple-600 transition-all duration-200">
                                Create Account
                            </Button>
                            <span className=' md:pl-14' >Already have an account? <Link className=' cursor-pointer text-blue-700' to="/login">Login</Link> </span>
                        </div>
                    </div>
                </form>
            </div>
       </>
    );
};

export default SignUp;
