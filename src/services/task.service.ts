import { TaskRepository } from "../repositories/task.repository";
import { ITask } from "../models/task.model";

export class TaskService {
    private taskRepository: TaskRepository;
    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    async createTask(taskData: Partial<ITask>) { {
        return await this.taskRepository.createTask(taskData);
    } }

    async getTaskById(taskId: string) {
        return await this.taskRepository.getTaskById(taskId);
    }

    async updateTask(taskId: string, updateData: Partial<ITask>) {
        return await this.taskRepository.updateTask(taskId, updateData);
    }

    async deleteTask(taskId: string) {
        return await this.taskRepository.deleteTask(taskId);
    }

    async getAllTasks() {
        return await this.taskRepository.getAllTasks();
    }   
}   
