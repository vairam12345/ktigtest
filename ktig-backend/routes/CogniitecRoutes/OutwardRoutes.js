const express = require("express");
const { createCogniitecOutward,getCogniitecOutwards, updateCogniitecOutward,deleteCogniitecOutward } = require("../../controllers/CogniitecControllers/CogniitecIOutwardController");


const router = express.Router();

// Cogniitec INWARD FORM Api Routess
router.get("/Cogniitec/Outwardform", getCogniitecOutwards);
router.post("/Cogniitec/Outwardform", createCogniitecOutward);
router.put("/Cogniitec/Outwardform/:id", updateCogniitecOutward);
router.delete("/Cogniitec/Outwardform/:id", deleteCogniitecOutward);
// Cogniitec INWARD FORM Api Routes






module.exports = router;






/////Post, Get,Put,Delete Api

////http://3.110.119.143:8081/KTNLInward/KTNL/Inwardform

//Delete Api

//http://3.110.119.143:8081/KTNLInward/KTNL/Inwardform/:id