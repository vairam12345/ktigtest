const express = require('express');
const router = express.Router();
const blogImageController = require('../controllers/blogController');

// Route to upload a blog image
router.post('/upload', blogImageController.uploadBlogImage);

// Route to fetch all blog images
router.get('/images', blogImageController.getBlogImages);

// Route to fetch a single blog image by its ID
router.get('/image/:id', blogImageController.getBlogImageById);

// Route to delete a blog image by its ID
router.delete('/images/:id', blogImageController.deleteBlogImage);

module.exports = router;



/////post 

//  http://13.201.85.29:8081/api/blogimages/upload


////GET

// http://13.201.85.29:8081/api/blogimages/images


///GET By Id


//// http://13.201.85.29:8081/api/blogimages/images


/////DELETE 

///// // http://13.201.85.29:8081/api/blogimages/images/id

