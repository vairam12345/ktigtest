const express = require("express");
const { getMultiscaleOutward,createMultiscaleOutward, updateMultiscaleOutward,deleteMultiscaleOutward } = require("../../controllers/MutliscaleControllers/MultiscaleOutwardController");


const router = express.Router();

// Multiscale INWARD FORM Api Routess
router.get("/Multiscale/Outwardform", getMultiscaleOutward);
router.post("/Multiscale/Outwardform", createMultiscaleOutward);
router.put("/Multiscale/Outwardform/:id", updateMultiscaleOutward);
router.delete("/Multiscale/Outwardform/:id", deleteMultiscaleOutward);
// Multiscale INWARD FORM Api Routes






module.exports = router;






/////Post, Get,Put,Delete Api

//// http://3.111.193.110:8081/KTNLInward/KTNL/Inwardform

//Delete Api

// http://3.111.193.110:8081/KTNLInward/KTNL/Inwardform/:id