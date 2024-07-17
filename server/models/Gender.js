import { Schema, model } from 'mongoose';

const Gender = Schema({
    name: { type: String, required: true,unique: true },
    isActive: { type: Boolean, required: true, default: true },
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
    }
});

export default new model('Gender', Gender);