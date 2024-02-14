import mongoose, { mongo } from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required."],
        unique: [true, "Username must be unique."],
        lowercase: true
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: [true, "Email must be unique."],
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minLenght: 7, // password length must be greater than 6 characters
        validate: {
            validator: function (password) {
                return password.length > 6
            },
            message: "Password length must be grater than 6 characters"
        }
    }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema);