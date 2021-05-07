import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _baseUrl = environment.api;

  public constructor(private _http: HttpClient) { }

  public add(user: any): Observable<any>{
    return this._http.post(`${this._baseUrl}/users`, user );
  }
}
