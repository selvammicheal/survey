import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(
    @Inject('USER_MICROSERVICE') private readonly user_client: ClientProxy
  ) {} 

  createUser(userDetails){
    const username = userDetails.username;
    const email = userDetails.email;
    const password = userDetails.password;
    return this.user_client.send(
      { cmd: 'register_user' },
      { username, email, password, },
    );
  }
  
  findAllUser(){
    return this.user_client.send(
      { cmd: 'get_user' },{}
    );
  }

  updateUser(id,userData){
    return this.user_client.send(
      {cmd: 'update_user'},
      {id,userData}
    )
  }

  deleteUser(id){
    return this.user_client.send(
      {cmd:'delete_user'},
      {id}
    );
  }

  




  
}
