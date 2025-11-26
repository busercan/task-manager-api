import { UserService } from "../services/user.service";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async createUser(req: any, res: any) {
        const userData = req.body;
        const newUser = await this.userService.createUser(userData);
        res.status(201).json(newUser);
    }

    async getUserById(req: any, res: any) {
        const userId = req.params.id;
        const user = await this.userService.getUserById(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    }

    async getUserByEmail(req: any, res: any) {
        const email = req.params.email;
        const user = await this.userService.getUserByEmail(email);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    }           
    async updateUser(req: any, res: any) {
        const userId = req.params.id;
        const updateData = req.body;
        const updatedUser = await this.userService.updateUser(userId, updateData);
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    }

    async deleteUser(req: any, res: any) {
        const userId = req.params.id;
        const deletedUser = await this.userService.deleteUser(userId);
        if (deletedUser) {
            res.json(deletedUser);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    }

    async getAllUsers(req: any, res: any) {
        const users = await this.userService.getAllUsers();
        res.json(users);
    }
}

export const userController = new UserController(); 