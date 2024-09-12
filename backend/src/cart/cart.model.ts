import { model, Schema, Types } from "mongoose";

const cartItemSchema = new Schema({
    product: {
        type: Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const cartSchema = new Schema({
    items: [cartItemSchema],
    totalPrice: {
        type: Number,
        required: true
    }
})

const cartModel = model("cart", cartSchema)
export default cartModel