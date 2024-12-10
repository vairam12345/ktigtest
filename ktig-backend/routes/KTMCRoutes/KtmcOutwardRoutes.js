const express = require("express");
const { getKtmcOutward,createKtmcOutward, updateKtmcOutward,deleteKtmcOutward } = require("../../controllers/KtmcControllers/KtmcOutwardformController");


const router = express.Router();

// Multiscale INWARD FORM Api Routess
router.get("/Ktmc/Outwardform", getKtmcOutward);
router.post("/Ktmc/Outwardform", createKtmcOutward);
router.put("/Ktmc/Outwardform/:id", updateKtmcOutward);
router.delete("/Ktmc/Outwardform/:id", deleteKtmcOutward);
// Multiscale INWARD FORM Api Routes






module.exports = router;






/////Post, Get,Put,Delete Api

//// http://13.201.85.29:8081/KTNLInward/KTNL/Inwardform

//Delete Api

// http://13.201.85.29:8081/KTNLInward/KTNL/Inwardform/:id