import { AppService } from './app.service';
export declare class AppController {
    private appService;
    constructor(appService: AppService);
    createUser(userData: any): import("rxjs").Observable<any>;
    getAllUser(): import("rxjs").Observable<any>;
    update(id: number, userData: any): import("rxjs").Observable<any>;
    delete(id: number): Promise<import("rxjs").Observable<any>>;
}
