const FormData = require('../models/contactformModel');

exports.saveFormData = async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save form data', error });
  }
};

exports.getFormData = async (req, res) => {
    try {
      const { service, business } = req.query;
      const filter = {};
      if (service) filter.service = service;
      if (business) filter.business = business;
  
      const formDataList = await FormData.find(filter);
      res.status(200).json(formDataList);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to retrieve form data', error });
    }
  };
  


//   exports.deleteFormData = async (req, res) => {
//     try {
//       const { id } = req.params; // Retrieve the ID from the request parameters
//       const deletedFormData = await FormData.findByIdAndDelete(id); // Find and delete the document by ID
  
//       if (!deletedFormData) {
//         return res.status(404).json({ message: 'Form data not found' });
//       }
  
//       res.status(200).json({ message: 'Form data deleted successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Failed to delete form data', error });
//     }
//   };



exports.deleteFormData = async (req, res) => {
    try {
      const { id } = req.params; // Retrieve the ID from the request parameters
      const deletedFormData = await FormData.findByIdAndDelete(id); // Find and delete the document by ID
  
      if (!deletedFormData) {
        return res.status(404).json({ message: 'Form data not found' });
      }
  
      res.status(200).json({ message: 'Form data deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to delete form data', error });
    }
  };
  
  