import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) { }

    async createUser(userData) {
        const bodyData: any = {
            username: userData.username,
            email: userData.email,
            password: userData.password,
            createdAt: new Date(),
        };
        return await this.userRepository.save(bodyData);
    }

    async findAllUser(): Promise<User[]> {
        return this.userRepository.find()
    }

    async updateUser(updateData) {
        // console.log(updateData)
        const id = updateData.id;
        const user =  await this.userRepository.findOne({
            where: { id }
          });
          if(!user){
            throw new BadRequestException("User not found");
          }
          const alterData = updateData.userData
        return this.userRepository.save({
            ...user,
            ...alterData
        })
    }

    async deleteUser(id:number){
        return await this.userRepository.delete(id);
    }


}