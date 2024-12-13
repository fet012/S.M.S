const mongoose = require("mongoose");

const academicYearSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fromYear: {
      type: Date,
      required: true,
    },
    toYear: {
      type: Date,
      required: true,
    },
    isCurrent: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Students",
      },
    ],
    teachers: [
      {
        type: mongoose.Schema.Types.objectId,
        ref: "Teacher",
      },
    ],
    // FINANCE
    // LIBRARY
    //...
  },
  { timestamps: true }
);

const academicYear = mongoose.model("AcademicYear", academicYearSchema);
module.exports = academicYear;
