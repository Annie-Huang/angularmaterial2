import { Injectable } from '@angular/core';
import {ContactmanagerModule} from '../contactmanager.module';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';

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

  private dataStore: {
    users: User[]
  };

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
  }

  loadAll() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';

    return this.http.get<User[]>(usersUrl)
      .subscribe(data => {
        this.dataStore.users = data;
      }, error => {
        console.log('Failed to fetch users');
      });
  }
}
