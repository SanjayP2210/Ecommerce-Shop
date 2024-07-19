import moment from "moment-timezone";
import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: moment().tz('Asia/Kolkata').format() },
    createdBy: { type: Schema.Types.ObjectId },
    modifiedBy: { type: Schema.Types.ObjectId },
    modifiedAt: { type: Date, default: moment().tz('Asia/Kolkata').format() }
});

const Review = model('Review', reviewSchema);

export default Review;
