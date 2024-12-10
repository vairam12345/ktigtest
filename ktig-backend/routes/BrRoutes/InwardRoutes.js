const express = require("express");
const { createBracademyPayment,getBracademyPayments,updateBracademyPayment,deleteBracademyPayment, } = require("../../controllers/BRAcademyformControllers/BrinwardformController");


const router = express.Router();

// KTNL INWARD FORM Api Routes
router.get("/BR/Inwardform", getBracademyPayments);
router.post("/BR/Inwardform", createBracademyPayment);
router.put("/BR/Inwardform/:id", updateBracademyPayment);
router.delete("/BR/Inwardform/:id", deleteBracademyPayment);
// KTNL INWARD FORM Api Routes






module.exports = router;






/////Post, Get,Put,Delete Api

//// http://3.111.193.110:8081/KTNLInward/KTNL/Inwardform

//Delete Api

// http://3.111.193.110:8081/KTNLInward/KTNL/Inwardform/:id