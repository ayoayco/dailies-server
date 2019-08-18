import mongoose from "mongoose";
import Database from "../database";

export interface ITask extends mongoose.Document {
  title: string;
  author: number;
}

export const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true }
});

const Task = Database.model<ITask>("Task", TaskSchema);
export default Task;