// src/models/Payment.ts
import mongoose, { Schema, Document } from "mongoose";

// Define the schema for storing payment details
const paymentSchema = new Schema(
  {
    planName: { type: String, required: true },
    price: { type: String, required: true },
    cardNumber: { type: String, required: true },
    expiryMonth: { type: String, required: true },
    expiryYear: { type: String, required: true },
    cvv: { type: String, required: true },
    postalCode: { type: String, required: true },
    cardType: { type: String, required: true },
    paymentDate: { type: Date, default: Date.now }
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default Payment;
