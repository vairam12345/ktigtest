const express = require('express');
const router = express.Router();
const blogImageController = require('../controllers/investmentController');

// Route to upload a blog image
router.post('/investerupload', blogImageController.uploadinvesterImage);

// Route to fetch all blog images
router.get('/investerimages', blogImageController.getImagesinvester);

// Route to fetch a single blog image by its ID
router.get('/investerimages/:id', blogImageController.getImageByIdinvester);

// Route to delete a blog image by its ID
router.delete('/investerimages/:id', blogImageController.deleteImageinvester);

module.exports = router;



/////post 

//  http://13.201.85.29:8081/api/blogimages/upload


////GET

// http://13.201.85.29:8081/api/blogimages/images


///GET By Id


//// http://13.201.85.29:8081/api/blogimages/images


/////DELETE 

///// // http://13.201.85.29:8081/api/blogimages/images/id

