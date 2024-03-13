import { UserService } from './user.service';
import { User } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    registerUser(message: User): Promise<User>;
    getUser(): Promise<User[]>;
    updateUser(update: any): Promise<any>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
