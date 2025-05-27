import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://music-maker-server.onrender.com/api/auth/login'
  constructor(private http: HttpClient) { }
  
  signIn(email: string, password: string) {
    return this.http.post(`${this.url}`, {email, password})

  }

  // בדיקה אם המשתמש מחובר
  isAuth(): boolean {
    return !!sessionStorage.getItem('token');
  }
  
  // קבלת הטוקן
  getToken(): string | null {
    return sessionStorage.getItem('token');
  }
  
}
