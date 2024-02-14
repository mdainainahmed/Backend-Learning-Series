import mongoose from "mongoose"

const medicalRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
    }
});

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);