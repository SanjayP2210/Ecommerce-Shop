import moment from 'moment-timezone';
import { Schema, model } from 'mongoose';

// Address Schema
const AddressSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  country: {
    type: String
  },
  zipCode: {
    type: String
  },
  isDefault: {
    type: Boolean,
    default: false
  },
  mobileNumber: {
    type: String,
    max: [10, '10 Characters is allowed'],
    validate: {
      validator: function (v) {
        return /\d{10}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'phone number required']
  },
  createdAt: {
    type: Date,
    default: moment().tz('Asia/Kolkata').format()
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref:'user',
    required: true
  },
  modifiedBy: {
    type: Schema.Types.ObjectId,
    ref:'user',
    required: true
  },
  modifiedAt: {
    type: Date,
    default: moment().tz('Asia/Kolkata').format()
  },
});

export default model('Address', AddressSchema);
