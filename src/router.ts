import * as express from 'express';
import * as taskController from './task/task.controller';

export const routes = express.Router();

// API Endpoints
routes.get('/', (req, res) => res.send({hello: 'Welcome to the dailies backend server'}));
routes.get("/tasks", taskController.allTasks);
routes.get("/task/:id", taskController.getTask);
routes.post("/task", taskController.addTask);
routes.put("/task/:id", taskController.updateTask);
routes.delete("/task/:id", taskController.deleteTask);
