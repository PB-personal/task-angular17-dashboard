import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUsers(): Observable<User[]> {
    const users: User[] = [
      { id: 1, name: 'John Doe', email: 'john@gmail.com', role: 'Admin' },
      { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', role: 'User' },
      { id: 3, name: 'Mike Johnson', email: 'mike@gmail.com', role: 'User' },
    ];
    return of(users).pipe(delay(1000)); // simulate server delay
  }
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}
