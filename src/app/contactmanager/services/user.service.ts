import { Injectable } from '@angular/core';
import {ContactmanagerModule} from '../contactmanager.module';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

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

  // BehaviourSubject will return the initial value or the current value on Subscription
  // Subject doesnot return the current value on Subscription. It triggers only on .next(value) call and return/output the value
  private _users: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[]
  };

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  loadAll() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';

    return this.http.get<User[]>(usersUrl)
      .subscribe(data => {
        this.dataStore.users = data;
        // We don't want to expose dataStore data in case other file modified it, just expose the clone version.
        this._users.next(Object.assign({}, this.dataStore).users);
      }, error => {
        console.log('Failed to fetch users');
      });
  }
}
