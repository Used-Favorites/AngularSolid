import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  andreessId: number | null;
  phone: string | null;
  date_birth: Date;
  AuditTrailId: number | null;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiEndpoint = environment.api_url;

  constructor(private http: HttpClient) {
    if (!this.apiEndpoint) {
      throw new Error('API endpoint is not defined');
    }
    console.log('apiEndpoint', this.apiEndpoint);
    // Restante do código para fazer a requisição HTTP
  }

  public getUsers(): Observable<any> {
    console.log('apiEndpoint', this.apiEndpoint);
    return this.http.get(`${this.apiEndpoint}users`);
  }

  public getUser(userId: User['id']): Observable<User> {
    // Especifica o tipo esperado como User
    return this.http.get<User>(`${this.apiEndpoint}users/list/${userId}`);
  }
  public getUsername(userId: User['id']): Observable<string> {
    return this.getUser(userId).pipe(map((user: User) => user.name));
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

  public login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiEndpoint}users/login`, {
      email,
      password,
    });
  }
}
