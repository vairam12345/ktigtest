const express = require("express");
const { createMultiscaleInward,getMultiscaleInward, updateMultiscaleInward,deleteMultiscaleInward } = require("../../controllers/MutliscaleControllers/MultiscaleInwardContoller");


const router = express.Router();

// Multiscale INWARD FORM Api Routess
router.get("/Multiscale/Inwardform", getMultiscaleInward);
router.post("/Multiscale/Inwardform", createMultiscaleInward);
router.put("/Multiscale/Inwardform/:id", updateMultiscaleInward);
router.delete("/Multiscale/Inwardform/:id", deleteMultiscaleInward);
// Multiscale INWARD FORM Api Routes






module.exports = router;






/////Post, Get,Put,Delete Api

//// http://3.111.193.110:8081/KTNLInward/KTNL/Inwardform

//Delete Api

// http://3.111.193.110:8081/KTNLInward/KTNL/Inwardform/:id