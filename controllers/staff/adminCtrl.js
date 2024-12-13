const Admin = require("../../model/HumanResources/Admin");
const AsyncHandler = require("express-async-handler");
const generateToken = require("../../utilities/generateToken");
const verifyToken = require("../../utilities/verifyToken");

//  @DESC REGISTER THE ADMIN
//  @ROUTE POST /api/v1/admin/register
//  @ACCESS PRIVATE
exports.adminRegister = AsyncHandler(async (req, res) => {
  const { name, schoolName, username, email, password, orderId } = req.body;

  // CHECK IF ADMIN EXISTS
  const adminFound = await Admin.findOne({ email });
  if (adminFound) {
    throw new Error("Admin already exists");
  }
  console.log("success");

  // REGISTER
  const user = await Admin.create({
    name,
    schoolName,
    username,
    email,
    password,
    orderId,
  });

  res.json({
    status: "success",
    data: user,
  });
});

//  @DESC LOGIN THE ADMIN
//  @ROUTE GET /api/v1/admin/login
//  @ACCESS PRIVATE
exports.adminLogin = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // FIND USER
  const user = await Admin.findOne({ email });
  
  // Check if user exists
  if (!user) {
    return res.status(404).json({ message: "Email not found" });
  }

  // Validate password
  const isPasswordValid = await user.verifyPassword(password);
  if (isPasswordValid) {
    const token = generateToken(user._id);
    const verify = verifyToken(token);
    
    console.log('Login successful');
    
    return res.status(200).json({ token, user, verify });
  } else {
    return res.status(401).json({ message: "Invalid password" });
  }
});

//  @DESC GET ALL THE ADMINS
//  @ROUTE GET /api/v1/admin/
//  @ACCESS PUBLIC
exports.getAllAdmins = AsyncHandler(async (req, res) => {
  const admins = await Admin.find();
  res.status(200).json({
    status: "success",
    message: "ALL ADMINS",
    admins,
  });
});

//  @DESC GET A SINGLE ADMIN
//  @ROUTE GET /api/v1/admin/Admin/:id
//  @ACCESS PRIVATE
exports.getSingleAdmin = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "ADMIN DATA",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

//  @DESC UPDATE THE ADMIN DATA
//  @ROUTE PUT /api/v1/admin/update/:id
//  @ACCESS PRIVATE
exports.updateAdmin = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "ADMIN DATA UPDATED",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

//  @DESC DELETE THE ADMIN
//  @ROUTE DELETE /api/v1/admin/delete/:id
//  @ACCESS PRIVATE
exports.deleteAdmin = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "ADMIN DATA DELETED",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};





exports.withdrawTeacher = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "ADMIN WITHDRAWS TEACHER",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};


exports.publishExam = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "ADMIN PUBLISHED EXAM RESULTS",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};


