const express = require('express');
const { saveFormData,getFormData,deleteFormData } = require('../controllers/contactController');
const router = express.Router();

router.post('/submitforms', saveFormData);

router.get('/submitforms', getFormData);

router.delete('/deleteforms/:id', deleteFormData);





module.exports = router;
