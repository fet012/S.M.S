const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    role: {
      type: String,
      default: "student",
    },
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
    studentId: {
      type: String,
      required: true,
      default: function () {
        return (
          "STU" +
          Math.floor(100 + Math.random() * 900) +
          Date.now.toString().slice(2, 4) +
          this.name
            .split(" ")
            .map((name) => name[0])
            .join("")
            .toUpperCase()
        );
      },
    },
    examResults: [
      {
        type: Schema.Types.ObjectId,
        ref: "ExamResult",
      },
    ],
    behaviourReport: [
      {
        type: Schema.Types.ObjectId,
        ref: "BehaviourReport",
      },
    ],
    class: {
      type: String,
      required: true,
      ref: "classes",
    },
    gender:{
      type: String,
      required: true
    },
    schoolFees: {
      type: Number,
      default: 0,
      required: true,
    },
    outstandingFees: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

studentSchema.virtual("owing").get(function () {
  return this.outstandingFees > 0;
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
