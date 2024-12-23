const express = require("express");
const dotenv = require("dotenv");
const adminRouter = require("../routes/staff/adminRoutes");
const {
  globalErrHandler,
  notFoundErr,
} = require("../middlewares/globalErrHandler");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the API!" });
});

const cors = require('cors');

// CORS
app.use(cors());

//MIDDLEWARES
app.use(express.json()); // PASS INCOMING PAYLOAD

//ROUTES
app.use("/api/v1/admin", adminRouter);

// ERROR MIDDLEWARES
app.use(notFoundErr);
app.use(globalErrHandler);








module.exports = app;
