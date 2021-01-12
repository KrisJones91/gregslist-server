import mongoose from "mongoose";
const Schema = mongoose.Schema

const Job = new Schema(
    {
        company: { type: String, required: true },
        jobTitle: { type: String, required: true },
        hours: { type: Number, required: true, min: 15, max: 40 },
        rate: { type: Number, required: true, min: 7.25 },
        description: { type: String, maxlength: 150 },
    }

)
export default Job