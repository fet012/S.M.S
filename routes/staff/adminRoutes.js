const express = require("express");
const {
  adminRegister,
  adminLogin,
  getAllAdmins,
  getSingleAdmin,
  updateAdmin,
  deleteAdmin,
    withdrawTeacher,

  publishExam,

} = require("../../controllers/staff/adminCtrl");
const isLoggedIn = require("../../middlewares/isLoggedin");

const adminRouter = express.Router();
// ADMIN REGISTER
adminRouter.post("/register", adminRegister);

// ADMIN LOGIN
adminRouter.post("/login", adminLogin);

// GET ALL ADMINS
adminRouter.get("/", getAllAdmins);

// GET SINGLE ADMIN
adminRouter.get("/Admin/:id", isLoggedIn, getSingleAdmin);

// UPDATE ADMIN
adminRouter.put("/update/:id", updateAdmin);

// DELETE ADMIN
adminRouter.delete("/delete/:id", deleteAdmin);

// ADMIN WITHDRAWING A TEACHER
adminRouter.put("/withdraw/teacher/:id", withdrawTeacher);

// ADMIN PUBLISHING EXAM RESULTS
adminRouter.put("/publish/exam/:id", publishExam);

module.exports = adminRouter;
