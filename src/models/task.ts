import mongoose from "mongoose";

const uri: string = "mongodb://127.0.0.1:27017/local";

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected!");
  }
});

export interface ITask extends mongoose.Document {
  title: string;
  author: number;
}

export const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true }
});

const Task = mongoose.model<ITask>("Task", TaskSchema);
export default Task;