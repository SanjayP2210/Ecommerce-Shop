import moment from 'moment-timezone';
import { Schema, model } from 'mongoose';

const CartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true, default: 1 },
        },
    ],
    createdAt: {
        type: Date,
        default : moment().tz('Asia/Kolkata').format()
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    modifiedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    modifiedAt: {
        type: Date,
        default : moment().tz('Asia/Kolkata').format()
    },
});

export default model('Cart', CartSchema);