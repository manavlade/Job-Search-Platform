import React, { useState } from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { RadioGroup } from '../ui/radio-group';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';


const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading } = useSelector(store => store.auth)

    const [input, setInput] = useState({
        email: "",
        password: "",
        role: ""
    });

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true))
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });

            if (res.data.success) {
                dispatch(setUser(res.data));
                navigate('/');
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }

        finally {
            dispatch(setLoading(false))
        }
    }
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <form onSubmit={SubmitHandler} className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-semibold text-center text-purple-700 mb-6"> Welcome Back! Login </h1>

                    <div className="space-y-4">
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
                            <Label className="block text-sm font-medium text-gray-700 mb-1">Passord</Label>
                            <Input
                                type="password"
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
                        {
                            loading ? <Button className=" w-full my-4" > <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please Wait </Button> : <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold py-2 rounded-md hover:from-indigo-500 hover:to-purple-600 transition-all duration-200">
                                Log In
                            </Button>
                        }

                        <div className="pt-4">

                            <span className=' md:pl-14' >Dont't Have an Account <Link className=' cursor-pointer text-blue-700' to="/signUp">Create Account</Link> </span>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login