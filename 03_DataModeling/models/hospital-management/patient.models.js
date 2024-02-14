import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    bloodGroup: {
        type: String,
        required: true,
        enum: ["A+", "A", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    gender: {
        type: String,
        required: true,
        enum: ["M", "F", "O"],
    },
    address: {
        type: String,
        required: true,
    },
    diagnosedWith: {
        type: String,
        required: true,
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },


}, { timestamps: true });

export const Patient = mongoose.model("Patient", patientSchema);