import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        types: String,
        required: [true, "Username is required."]
    },
    email: {
        types: String,
        required: [true, "Email is required."],
        unique: [true, "Email must be unique."],
    },
    password: {
        type: String,
        required: [true, "Password is required."],
    }
});

export const User = mongoose.model("User", userSchema);