import { Schema, model, Types } from 'mongoose';

interface IOrder {
    user: Types.ObjectId;
    items: { product: Types.ObjectId; quantity: number }[];
    totalPrice: number;
    paymentMethod: string;
    isPaid: boolean;
    status: string;
}

const orderSchema = new Schema<IOrder>({
    items: [{
        product: { type: Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true }
    }],
    totalPrice: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    isPaid: { type: Boolean, default: false },
    status: { type: String, default: 'Pending' }
}, { timestamps: true });

export const Order = model<IOrder>('Order', orderSchema);