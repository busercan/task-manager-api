import { UserRepository } from "../repositories/user.repository";
import { IUser } from "../models/user.model";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(userData: Partial<IUser>) : Promise<IUser> {
        return await this.userRepository.createUser(userData);
    }

    async getUserById(userId: string) : Promise<IUser | null> {
        return await this.userRepository.getUserById(userId);
    }

    async getUserByEmail(email: string) : Promise<IUser | null> {
        return await this.userRepository.getUserByEmail(email);
    }

    async updateUser(userId: string, updateData: Partial<IUser>) : Promise<IUser | null> {
        return await this.userRepository.updateUser(userId, updateData);
    }

    async deleteUser(userId: string) : Promise<IUser | null> {
        return await this.userRepository.deleteUser(userId);
    }

    async getAllUsers() : Promise<IUser[]> {
        return await this.userRepository.getAllUsers();
    }
}

export const userService = new UserService();