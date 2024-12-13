const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema(
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
      tpe: String,
      required: true,
    },
    teacherId: {
      type: String,
      required: true,
      default: function () {
        return (
          "TEA" +
          Math.floor(100 + Math.random() * 900) +
          Date.now().toString().slice(2, 4) +
          this.name
            .split("")
            .map((name) => name[0])
            .join("")
            .toUpperCase()
        );
      },
    },
    role: {
      type: String,
      default: "teacher",
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    classInCharge: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
    examsCreated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam",
      },
    ],
    classesToTeach: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "classes",
      },
    ],
  },
  { timestamps: true }
);

// MODEL
const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
