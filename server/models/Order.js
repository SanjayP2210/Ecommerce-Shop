import moment from 'moment-timezone';
import mongoose, { model, Schema } from 'mongoose';

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
        },
    ],
    totalAmount: { type: Number, required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    paymentResult: {
        id: String,
        status: String,
        update_time: String,
        email_address: String,
    },
    createdAt: {
        type: Date,
        default: moment().tz('Asia/Kolkata').format()
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
        default: moment().tz('Asia/Kolkata').format()
    },
});

const Order = model('Order', orderSchema);

export default Order;
