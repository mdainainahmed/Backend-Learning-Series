import mongoose from "mongoose"

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    addrerssLine1: {
        type: String,
        required: true,
    },
    addrerssLine2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    specializedIn: [
        {
            type: String,
        }
    ],
    
}, { timestamps: true });

export const Hospital = mongoose.model("Hospital", hospitalSchema);