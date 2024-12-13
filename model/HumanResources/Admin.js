const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const randomText = Math.random().toString(36).substring(7).toLocaleUpperCase();
const randomNum = Math.floor(1000 + Math.random() * 90000);

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "admin",
    },
    username: {
      type: String,
      required: true,
    },
    schoolName: {
      type: String,
      required: true,
    },

    orderId: {
      type: Number,
      required: true,
      default: randomText + randomNum,
    },
    classes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "classes",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// HASH PASSWORD
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  //SALT
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// VERIFY PASSWORD
adminSchema.methods.verifyPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
