import mongoose from "mongoose";
const Schema = mongoose.Schema

const House = new Schema(
    {
        bedrooms: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
        levels: { type: Number, required: true, min: 1 },
        year: { type: Number, required: true, max: 2021 },
        price: { type: Number, required: true },
        description: { type: String, maxlength: 150 },
        imgURL: { type: String, default: "http://placehold.it/200x200" }
    }

)
export default House