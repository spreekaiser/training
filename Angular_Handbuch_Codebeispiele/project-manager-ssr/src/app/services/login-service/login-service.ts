import { Inject, Injectable, Optional } from '@angular/core';
import { ServerSideStorage } from 'src/app/cache/server-side-storage';
import { AUTH_ENABLED } from '../../app.tokens';

const CURRENT_USER = 'currentUser';

@Injectable()
export class LoginService {

  USERS = [
    { name: 'admin', password: 'admin', rights: ['edit_tasks', 'change_settings'] },
    { name: 'user', password: 'secret', rights: ['edit_tasks'] }
  ];

  storage: Storage | ServerSideStorage;

  constructor(@Optional() @Inject(AUTH_ENABLED) public authEnabled = false) {

    if (typeof localStorage === "undefined" || localStorage === null) {
      console.log('using ServerSideStorage');
      this.storage = new ServerSideStorage();
    } else {
      this.storage = localStorage;
    }

  }

  login(name: string, password: string) {
    const user = this.USERS.find(u => u.name === name);
    if (user && user.password === password) {
      localStorage.setItem(CURRENT_USER, JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(CURRENT_USER);
  }

  isLoggedIn() {
    return !this.authEnabled || localStorage.getItem(CURRENT_USER) != null;
  }

  getUser() {
    const userString = localStorage.getItem(CURRENT_USER);
    if (userString) {
      return JSON.parse(userString);
    }
  }

}
