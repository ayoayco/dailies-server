import { Request, Response } from "express";
import { Params } from "express-serve-static-core";

import Task from '../models/task';

export type IParams = Params & {
    id: string;
};

export let allTasks = (req: Request, res: Response) => {
    Task.find((err: any, tasks: any) => {
        if (err) {
            res.send('Error!');
        } else {
            res.send(tasks);
        }
    })
};

export let getTask = (req: Request, res: Response) => {
    const params = req.params as IParams;
    Task.findById(params.id, (err: any, task: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(task);
        }
    })
};

export let deleteTask = (req: Request, res: Response) => {
    const params = req.params as IParams;
    Task.deleteOne({_id: params.id}, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send('Task deleted');
        }
    })
};

export let updateTask = (req: Request, res: Response) => {
    const params = req.params as IParams;
    Task.findByIdAndUpdate(params.id, req.body, (err: any, task: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send('Task updated');
        }
    });
};

export let addTask = (req: Request, res: Response) => {
    const task = new Task(req.body);

    task.save((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(task);
        }
    });
};