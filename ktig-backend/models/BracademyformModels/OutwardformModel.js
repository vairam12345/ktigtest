const mongoose = require("mongoose");

const BROutwardformPaymentSchema = new mongoose.Schema({
  paymentMethod: {
    type: String,
    required: true,
    enum: ["cash", "cheque", "account"],
  },
  amount: {
    type: String,
    required: true,
  },
  authorizedPerson: {
    type: String,
    required: true,
  },
  approved: {
    type: String,
    required: true,
    enum: ["Yes", "No"],
  },
  description: {
    type: String,
  },
}, );

module.exports = mongoose.model("BROutwardformPayment", BROutwardformPaymentSchema);







