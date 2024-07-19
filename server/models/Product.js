import moment from "moment-timezone";
import { Schema, model } from "mongoose";

const productSchema = new Schema({
    productName: { type: String, required: true },
    taxClass: { type: String, required: true },
    vatAmount: { type: String, required: true },
    basePrice: { type: Number, required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    gender: [{ type: Schema.Types.ObjectId, ref: 'Gender' }],
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    variants: [{
        value: { type: String },
        label: { type: Schema.Types.ObjectId, ref: 'Variant' }
    }],
    description: { type: String, required: true },
    status: [{ type: Schema.Types.ObjectId, ref: 'Status' }],
    template: { value: String, label: String },
    thumbnail: [{
        public_id: String,
        url: String
    }],
    images: [{
        public_id: String,
        url: String
    }],
    discountType: { type: String, required: true },
    stock: {
        type: Number,
        required: [true, "Please Enter product Stock"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1,
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    numOfReviews: {
        type: Number,
        default: 0,
    },
    ratings: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: moment().tz('Asia/Kolkata').format()
    },
    createdBy: {
        type: Schema.Types.ObjectId
    },
    modifiedBy: {
        type: Schema.Types.ObjectId
    },
    modifiedAt: {
        type: Date,
        default: moment().tz('Asia/Kolkata').format()
    },
});

const Product = model('Product', productSchema);

export default Product;
