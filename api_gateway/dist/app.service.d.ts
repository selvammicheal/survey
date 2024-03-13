import { ClientProxy } from '@nestjs/microservices';
export declare class AppService {
    private readonly user_client;
    constructor(user_client: ClientProxy);
    createUser(userDetails: any): import("rxjs").Observable<any>;
    findAllUser(): import("rxjs").Observable<any>;
    updateUser(id: any, userData: any): import("rxjs").Observable<any>;
    deleteUser(id: any): import("rxjs").Observable<any>;
}
