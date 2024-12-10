const express = require("express");
const { getKtmcInward,createKtmcInward, updateKtmcInward,deleteKtmcInward } = require("../../controllers/KtmcControllers/KtmcInwardformController");


const router = express.Router();

// Multiscale INWARD FORM Api Routess
router.get("/Ktmc/Inwardform", getKtmcInward);
router.post("/Ktmc/Inwardform", createKtmcInward);
router.put("/Ktmc/Inwardform/:id", updateKtmcInward);
router.delete("/Ktmc/Inwardform/:id", deleteKtmcInward);
// Multiscale INWARD FORM Api Routes






module.exports = router;






/////Post, Get,Put,Delete Api

//// http://13.201.85.29:8081/KTNLInward/KTNL/Inwardform

//Delete Api

// http://13.201.85.29:8081/KTNLInward/KTNL/Inwardform/:id