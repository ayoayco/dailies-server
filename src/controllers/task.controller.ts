import { Request, Response } from "express";

export let allTasks = (req: Request, res: Response) => {
  res.send("Returns all Tasks");
};

export let getTask = (req: Request, res: Response) => {
  res.send("Returns one task");
};

export let deleteTask = (req: Request, res: Response) => {
  res.send("Returns one task");
};

export let updateTask = (req: Request, res: Response) => {
  res.send("Returns one task");
};

export let addTask = (req: Request, res: Response) => {
  res.send("Returns one task");
};