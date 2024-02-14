import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    types: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const addressSchema = new mongoose.Schema({
  houseNo: {
    type: Number,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: String, // better approach to set pincodes in String as Many countries use Alphabets in thier pincodes too. 
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    orderItems: [orderItemSchema],
    /*
    orderItems: [
      {
        productId: {
          types: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    */
    orderPrice: {
      type: Number,
      default: 0,
    },
    address: addressSchema,
    status: {
      type: String,
      emun: ['PENDING', 'CANCELLED', 'DELIVERED'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
