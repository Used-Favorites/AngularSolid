import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  SERVER_URL = process.env['URL_API'] ?? 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get(`${this.SERVER_URL}users`);
  }

  public getUser(userId: User['id']) {
    return this.http.get(`${this.SERVER_URL}users/list/${userId}`);
  }

  public createUser(user: any) {
    return this.http.post(`${this.SERVER_URL}users/create`, user);
  }

  public updateUser(user: any) {
    return this.http.put(`${this.SERVER_URL}users/update/${user.id}`, user);
  }

  public deleteUser(userId: number) {
    return this.http.delete(`${this.SERVER_URL}users/delete/${userId}`);
  }
}
