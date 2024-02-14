import mongoose from "mongoose"

const hospitalHoursSchema = new mongoose.Schema({
    hospital : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
    },
    workingHour: {
        type: Number,
        required: true,
    },
})

const doctorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    experienceInYears: {
        type: Number,
        default: 0
    },
    specialization: {
        type: String,
        enum: ["ENT", "ORTHO", "GYNO"],
        default: "None"
    },
    worksInHospitals: [hospitalHoursSchema],
    salary: {
        type: String,
        required: true,
    }

}, { timestamps: true });

export const Doctor = mongoose.model("Doctor", doctorSchema);