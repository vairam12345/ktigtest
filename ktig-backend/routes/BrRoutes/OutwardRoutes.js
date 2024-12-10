const express = require("express");
const { createBracademyPayment,getBracademyPayments,updateBracademyPayment,deleteBracademyPayment, } = require("../../controllers/BRAcademyformControllers/BroutwardformController");


const router = express.Router();

// KTNL OUTWARD FORM Api Routes
router.get("/BR/Outwardform", getBracademyPayments);
router.post("/BR/Outwardform", createBracademyPayment);
router.put("/BR/Outwardform/:id", updateBracademyPayment);
router.delete("/BR/Outwardform/:id", deleteBracademyPayment);
// KTNL OUTWARD FORM Api Routes






module.exports = router;






/////Post, Get,Put,Delete Api

////http://3.110.119.143:8081/KTNLInward/KTNL/Inwardform

//Delete Api

//http://3.110.119.143:8081/KTNLInward/KTNL/Inwardform/:id