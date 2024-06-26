import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiEndpoint = environment.api_url ?? 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get(`${this.apiEndpoint}users`);
  }

  public getUser(userId: User['id']): Observable<any> {
    return this.http.get(`${this.apiEndpoint}users/list/${userId}`);
  }

  public createUser(
    email: string,
    name: string,
    password: string
  ): Observable<any> {
    return this.http.post(`${this.apiEndpoint}users/create`, {
      email,
      name,
      password,
    });
  }

  public updateUser(user: any): Observable<any> {
    return this.http.put(`${this.apiEndpoint}users/update/${user.id}`, user);
  }

  public deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiEndpoint}users/delete/${userId}`);
  }
}
