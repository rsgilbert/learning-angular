import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap, Observable, of } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private token = ''

    get isLoggedIn() { return !!this.token }

    constructor(private http: HttpClient) { }

    private loginUrl = "https://fakestoreapi.com/auth/login"

    login(): Observable<string> {
        // this.token = 'xxx'
        // return of('xxx');
        return this.http.post<string>(this.loginUrl, {
            username: 'david_r',
            password: '3478*#54'
        }).pipe(tap(tkn => this.token = tkn), tap(tkn => console.log(tkn)))
    }

    logout() {
        this.token = ''
    }
}
