import { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
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
    isActive: {
        type: Boolean,
        default: true
    }
});

const category = model('Category', CategorySchema);
export default category;