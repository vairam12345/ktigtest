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

////http://3.110.119.143:8081/KTNLInward/KTNL/Inwardform

//Delete Api

//http://3.110.119.143:8081/KTNLInward/KTNL/Inwardform/:id