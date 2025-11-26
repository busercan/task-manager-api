import { TaskService } from "../services/task.service";
import { taskRepository } from "../repositories/task.repository";

const taskService = new TaskService(taskRepository);

export class TaskController {
    async createTask(req: any, res: any) {
        try {
            const task = await taskService.createTask(req.body);
            res.status(201).json(task);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to create task' });
        }
    }

    async getTaskById(req: any, res: any) {
        try {
            const task = await taskService.getTaskById(req.params.id);
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).json({ error: 'Task not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve task' });
        }
    }

    async updateTask(req: any, res: any) {
        try {
            const task = await taskService.updateTask(req.params.id, req.body);
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).json({ error: 'Task not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update task' });
        }         
    }
    
    async deleteTask(req: any, res: any) {
        try {
            const task = await taskService.deleteTask(req.params.id);   
            if (task) {
                res.status(200).json({ message: 'Task deleted successfully' });
            } else {
                res.status(404).json({ error: 'Task not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete task' });
        }         
    }

    async getAllTasks(req: any, res: any) {
        try {
            const tasks = await taskService.getAllTasks();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve tasks' });
        }         
    }
}   
