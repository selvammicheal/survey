import {Controller,Body,Patch,Param} from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService, 
  ) {}
  
  @MessagePattern({ cmd: 'register_user' })
  async registerUser(@Payload() message: User): Promise<User> {
    console.log(message,"Message")
    return await this.userService.createUser(message);
  }

  @MessagePattern({ cmd: 'get_user' })
  async getUser(): Promise<User[]> {
    return await this.userService.findAllUser()
  }


  @MessagePattern({ cmd: 'update_user' })
  async updateUser(@Payload() update: any) {
    return await this.userService.updateUser(update)
  }

  @MessagePattern({cmd:'delete_user'})
  async delete(@Payload() id:number){
    return await this.userService.deleteUser(id);
  }
}