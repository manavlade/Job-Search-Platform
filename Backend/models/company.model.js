import mongoose from "mongoose";

const comapnySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String,
        required: true
    },
    logo: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        requied: true
    },
    description: {
        type: String
    },

}, { Timestamp: true });

export const Company = mongoose.model('Company', comapnySchema);
