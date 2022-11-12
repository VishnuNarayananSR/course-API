import mongoose from "mongoose";

export default interface Course {
  title: string;
  description: string;
  weeks: string;
  fees: Number;
  minimumSkill: string;
  scholarshipAvailable: Boolean;
  createdAt: Date;
  bootcamp: mongoose.Types.ObjectId;
}
