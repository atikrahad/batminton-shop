import { Schema, model } from 'mongoose';

export type TProduct = {
    name: string;
    category: string;
    brand: string;
    description: string;
    price: number;
    discountPrice?: number;
    stockQuantity: number;
    rating: number;
    imageUrl: string;
}

const productSchema = new Schema<TProduct>({
    name: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number },
    stockQuantity: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    imageUrl: { type: String, required: true }
}, { timestamps: true });

export const Product = model('Product', productSchema);