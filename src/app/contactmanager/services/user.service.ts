import { Injectable } from '@angular/core';
import {ContactmanagerModule} from '../contactmanager.module';

// In this case, providedIn: 'root' specifies that the service should be provided in the root injector.
// You should always provide your service in the root injector unless there is a case where you want
// the service to be available only if the consumer imports a particular @NgModule.
// e.g.
// @Injectable({
//   providedIn: UserModule,
// })
// @Injectable({
//   providedIn: 'root'
// })
@Injectable({
  providedIn: ContactmanagerModule
})
export class UserService {

  constructor() { }
}
