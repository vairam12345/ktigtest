const Payment = require("../../models/CogniitecModels/Inwardform");

// Create a new payment
const createCogniitecInward = async (req, res) => {
  try { 
    const { paymentMethod, amount, authorizedPerson, approved, description } = req.body;

    // Check for missing required fields
    if (!paymentMethod || !amount || !authorizedPerson || !approved) {
      return res.status(400).json({ 
        message: "Missing required fields: paymentMethod, amount, authorizedPerson, or approved" 
      });
    }

    const payment = new Payment({ paymentMethod, amount, authorizedPerson, approved, description });
    const savedPayment = await payment.save();
    res.status(201).json({ message: "Payment created successfully", data: savedPayment });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all payments
const getCogniitecInward = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json({ message: "Payments retrieved successfully", data: payments });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update a payment by ID
const updateCogniitecInward = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentMethod, amount, authorizedPerson, approved, description } = req.body;

    const updatedPayment = await Payment.findByIdAndUpdate(
      id,
      { paymentMethod, amount, authorizedPerson, approved, description },
      { new: true, runValidators: true } // Validate inputs and return updated document
    );

    if (!updatedPayment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.status(200).json({ message: "Payment updated successfully", data: updatedPayment });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete a payment by ID
const deleteCogniitecInward = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPayment = await Payment.findByIdAndDelete(id);

    if (!deletedPayment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.status(200).json({ message: "Payment deleted successfully", data: deletedPayment });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  createCogniitecInward,
  getCogniitecInward,
  updateCogniitecInward,
  deleteCogniitecInward,
};
