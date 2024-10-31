import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { LogOut, Settings, User2 } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="bg-white shadow-lg py-2">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
                {/* Logo */}
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        Job<span className="text-purple-600">Portal</span>
                    </h1>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center space-x-8">
                    <ul className="flex items-center space-x-6 font-medium text-gray-700">
                        <li className="hover:text-purple-600 cursor-pointer transition-colors duration-200">Home</li>
                        <li className="hover:text-purple-600 cursor-pointer transition-colors duration-200">About</li>
                        <li className="hover:text-purple-600 cursor-pointer transition-colors duration-200">Browse</li>
                    </ul>

                    {/* Avatar & Dropdown Menu */}
                    <Popover>
                        <PopoverTrigger>
                            <Avatar className="cursor-pointer">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className="w-68 p-4 mt-5 border border-gray-200 shadow-lg rounded-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <Avatar className="w-12 h-12">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="font-semibold text-gray-900">MR Developer</h4>
                                    <p className="text-sm text-gray-500">mrdeveloper@example.com</p>
                                </div>
                            </div>
                            <hr className="my-2" />

                            <div className="flex flex-col space-y-2">
                                <Button variant="link" className="flex items-center text-xl w-full text-gray-700 hover:text-purple-600">
                                    <User2 className="w-6 h-6 mr-3" /> Profile
                                </Button>
                                <Button variant="link" className="flex items-center text-xl w-full text-gray-700 hover:text-purple-600">
                                    <Settings className="w-6 h-6 mr-3" /> Settings
                                </Button>
                                <Button variant="link" className="flex items-center text-xl w-full text-red-600 hover:text-red-700">
                                    <LogOut className="w-6 h-6 mr-3" /> Logout
                                </Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
