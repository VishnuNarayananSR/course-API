import mongoose, { model } from "mongoose";
import { Course } from "../../types";
import { NotFoundError } from "../../types/errors";
import Bootcamp from "./bootcamp";

const CourseSchema = new mongoose.Schema<Course>({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a course title"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  weeks: {
    type: String,
    required: [true, "Please add number of weeks"],
  },
  fees: {
    type: Number,
    required: [true, "Please add a tuition cost"],
  },
  minimumSkill: {
    type: String,
    required: [true, "Please add a minimum skill"],
    enum: ["beginner", "intermediate", "advanced"],
  },
  scholarshipAvailable: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  bootcamp: {
    type: mongoose.Types.ObjectId,
    ref: "Bootcamp",
    required: true,
  },
});

CourseSchema.pre("save", async function (next) {
  const bootcamp = await Bootcamp.findById(this.bootcamp);
  if (!bootcamp) {
    next(new NotFoundError(`Invalid id for bootcamp: ${this._id}`));
  }
});

export default model("Course", CourseSchema);
