import {Controller,Post,Body,Inject, Get, Param, Put, Delete} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private appService: AppService
  ) {}  
  
  @Post('user/createUser')
  createUser(@Body() userData) {
    return this.appService.createUser(userData);
  }

  @Get()
  getAllUser() {  
      return this.appService.findAllUser()
  }

  @Put(":id")
  update(@Param('id') id:number, @Body() userData){
      return this.appService.updateUser(id, userData)
  }

  @Delete(':id')
  async delete(@Param('id') id:number){
  return this.appService.deleteUser(id);
}


}