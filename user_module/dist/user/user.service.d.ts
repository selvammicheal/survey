import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(userData: any): Promise<any>;
    findAllUser(): Promise<User[]>;
    updateUser(updateData: any): Promise<any>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}
