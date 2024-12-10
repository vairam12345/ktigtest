const Payment = require("../../models/KtnlformModels/InwardformModel");

// Create a new payment
const createPayment = async (req, res) => {
  try {
    const { paymentMethod, amount, authorizedPerson, approved, description } = req.body;

    if (!paymentMethod || !amount || !authorizedPerson || !approved) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const payment = new Payment({
      paymentMethod,
      amount,
      authorizedPerson,
      approved,
      description,
    });

    const savedPayment = await payment.save();
    res.status(201).json(savedPayment);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all payments
const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update a payment by ID
const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentMethod, amount, authorizedPerson, approved, description } = req.body;

    const updatedPayment = await Payment.findByIdAndUpdate(
      id,
      { paymentMethod, amount, authorizedPerson, approved, description },
      { new: true, runValidators: true } // Return updated document
    );

    if (!updatedPayment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.status(200).json(updatedPayment);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete a payment by ID
const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPayment = await Payment.findByIdAndDelete(id);

    if (!deletedPayment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  createPayment,
  getPayments,
  updatePayment,
  deletePayment,
};
