import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _baseUrl = environment.api;
  private _isAuth = false;

  public constructor(private _http: HttpClient) { }
  
  public login({login, password}): Observable<any>{
    return this._http.post(`${this._baseUrl}/login`, {login, password}).pipe(
      tap((response) => {
        if(response.status == 'success') {
          this._isAuth = true;
        }
      })
    )
  }
}
