import { Schema,model } from "mongoose";

const productSchema = new Schema({
    productName: { type: String, required: true },
    taxClass: { type: String, required: true },
    vatAmount: { type: String, required: true },
    basePrice: { type: Number, required: true },
    categories: [{ value: String, label: String }],
    gender: [{ value: String, label: String }],
    tags: [{ value: String, label: String }],
    variants: [{
        value: { type: String},
        label: { type: String}
    }],
    description: { type: String, required: true },
    status: { value: String, label: String },
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
    createdAt: {
        type: Date,
        default: Date.now()
    },
    createdBy: {
        type: Schema.Types.ObjectId
    },
    modifiedBy: {
        type: Schema.Types.ObjectId
    },
    modifiedAt: {
        type: Date,
        default: Date.now()
    },
    stock: {
        type: Number,
        required: [true, "Please Enter product Stock"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1,
    },
    reviews: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: false,
            },
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now()
            },
            createdBy: {
                type: Schema.Types.ObjectId
            },
            modifiedBy: {
                type: Schema.Types.ObjectId
            },
            modifiedAt: {
                type: Date,
                default: Date.now()
            },
        },
    ],
    numOfReviews: {
        type: Number,
        default: 0,
    },
    ratings: {
        type: Number,
        default: 0,
    },
});

const Product = model('Product', productSchema);

export default Product;
