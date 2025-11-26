import {Task , ITask} from '../models/task.model';

export class TaskRepository {
    async createTask(taskData: Partial<ITask>): Promise<ITask> {
        const task = new Task(taskData);
        return await task.save();
    }

    async getTaskById(taskId: string): Promise<ITask | null> {
        return await Task.findById(taskId).exec();
    }
    
    async updateTask(taskId: string, updateData: Partial<ITask>): Promise<ITask | null> {
        return await Task.findByIdAndUpdate(taskId, updateData, { new: true }).exec();
    }

    async deleteTask(taskId: string): Promise<ITask | null> {
        return await Task.findByIdAndDelete(taskId).exec();
    }

    async getAllTasks(): Promise<ITask[]> {
        return await Task.find().exec();
    }
}

export const taskRepository = new TaskRepository();
