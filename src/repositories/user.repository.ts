import { User, IUser } from "../models/user.model";    

export class UserRepository {
    async createUser(userData: Partial<IUser>): Promise<IUser> {
        const user = new User(userData);
        return await user.save();
    }

    async getUserById(userId: string): Promise<IUser | null> {
        return await User.findById(userId).exec();
    }
    
    async getUserByEmail(email: string): Promise<IUser | null> {
        return await User.findOne({ email }).exec();
    }
    async updateUser(userId: string, updateData: Partial<IUser>): Promise<IUser | null> {
        return await User.findByIdAndUpdate(userId, updateData, { new: true }).exec();
    }

    async deleteUser(userId: string): Promise<IUser | null> {
        return await User.findByIdAndDelete(userId).exec();
    }

    async getAllUsers(): Promise<IUser[]> {
        return await User.find().exec();
    }
}

export const userRepository = new UserRepository();