const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "students",
      },
    ],
    subjects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Teacher",
      },
    ],
    teacher: {
      type: String,
      ref: "Teacher",
      required: true,
    },
    class: {
      type: String,
      required: true,
      ref: "classes",
    },
    attendance: {
      true: Boolean,
      default: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
