import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { RegistrationStats } from '../models/registration-stats';
import { DialogService } from './dialog.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject:BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  user$ = this.userSubject.asObservable();
  private url = 'https://music-maker-server.onrender.com/api/user';
  private urlAuth = 'https://music-maker-server.onrender.com/api/auth/register';

  
  constructor(private http: HttpClient ,private dialogService:DialogService) {

  }

  getUsers() : Observable<User[]>{
    this.http.get<User[]>(this.url).subscribe((data) =>this.userSubject.next(data),
    (error)=>{
      this.dialogService.handleHttpError(error);
    });
    return this.user$;//?
  }


  // getUserById(courseId: number, lessonId: number): Observable<User> {
  //   return this.http.get<User>(`${this.url}/${courseId}/lessons/${lessonId}`);
  // }

  // getUserByEmail(email:string): Observable<User> {
  //   return this.http.get<User>(`${this.url}/email/${email}`);
  // }
  addUser(user: Omit<User,'id'|'createdAt'>): Observable<{ user:User }> {
    return this.http.post<{ user:User }>(this.urlAuth,user).pipe(
      tap(() => this.getUsers())
    );
  }
  // updateUser(courseId: number, lessonId: number, lesson: User): Observable<{ message: string }> {
  //   return this.http.put<{ message: string }>(`${this.url}/${courseId}/lessons/${lessonId}`,lesson).pipe(
  //     tap(() => this.getLessons(courseId))
  //   );
  // }


  deleteUser(userId: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.url}/${userId}`).pipe(
      tap(() => this.getUsers())
    );
  }

  getRegistrationStats():Observable<RegistrationStats[]>{
    return this.http.get<RegistrationStats[]>(`${this.url}/registration-stats`).pipe(
      tap(() => this.getUsers())
    );;
  }

  emptyUsers():void{
    this.userSubject.next([]);
  }
}
