import { User } from "../models/user.schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { fullName, email, password, phoneNumber, role } = req.body;

        if (!fullName || !email || !password || !phoneNumber || !role) {
            return res.status(400).json({
                message: "Insuffient data",
                success: false,
            });
        };

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                message: "Email already exists",
                success: false,
            });
        };


        const hashedPassword = await bcrypt.hash(password, 10);
        

        await User.create({
            fullName,
            email,
            password: hashedPassword,
            phoneNumber,
            role
        })

        return res.status(200).json({
            message: "Account created successfully",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Insuffient data",
                success: false,
            });
        };

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false,
            });
        };

        const isHassedMatch = await bcrypt.compare(password, user.password)
        if (!isHassedMatch) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false,
            });
        };

        if (role != user.role) {
            return res.status(400).json({
                message: "Account does not exist with current role",
                success: false,
            });
        }

        const tokenData = {
            userId: user._id
        }


        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `Welcome back  ${user.fullName}`,
            success: true
        })

    } catch (error) {
        console.log(error);
    }
}

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "LOGOUT SUCCESSFULL GET LOST 😂😂😂",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}


export const updateUser = async (req, res) => {
    try {

        const { fullName, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;

        if (!fullName || !email || !bio || !phoneNumber || !skills) {
            return res.status(400).json({
                message: "Insuffient data",
                success: false,
            });
        };
        
        const skillsArray = skills.split(",")
        const userId = req._id; // yaha req.id aana chahiye but no idea why _id  1:16:18 minute

        let user = await User.findById(userId);

        if(!user){
            return res.status(400).json({
                message: "No such user exist",
                success: false,
            });
        }

        user.fullName = fullName;
        user.email = email;
        user.phoneNumber = phoneNumber;
        user.profile.bio = bio;
        user.profile.skills = skills;

        await user.save();
        

        user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }
        return res.status(200).json({
            message: "Profile updated successfully",
            user,
            success: true,
        });


    } catch (error) {
        console.log(error);
    }
}
