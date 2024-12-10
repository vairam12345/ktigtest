const express = require("express");
const { createCogniitecInward,getCogniitecInward, updateCogniitecInward,deleteCogniitecInward } = require("../../controllers/CogniitecControllers/CogniitecInwardController");


const router = express.Router();

// Cogniitec INWARD FORM Api Routess
router.get("/Cogniitec/Inwardform", getCogniitecInward);
router.post("/Cogniitec/Inwardform", createCogniitecInward);
router.put("/Cogniitec/Inwardform/:id", updateCogniitecInward);
router.delete("/Cogniitec/Inwardform/:id", deleteCogniitecInward);
// Cogniitec INWARD FORM Api Routes






module.exports = router;






/////Post, Get,Put,Delete Api

//// http://13.201.85.29:8081/KTNLInward/KTNL/Inwardform

//Delete Api

// http://13.201.85.29:8081/KTNLInward/KTNL/Inwardform/:id