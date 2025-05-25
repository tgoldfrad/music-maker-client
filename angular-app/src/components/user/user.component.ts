import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {UserFormComponent} from '../user-form/user-form.component'
import { DatePipe } from '@angular/common';
import {MatIcon} from '@angular/material/icon'


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatListModule, MatDialogModule,MatIcon,DatePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users$!: Observable<User[]>;
  filteredUsers: any[] = [];
  searchText: string = '';
  // courseToEdit!: Course;
  // isTeacher: boolean = sessionStorage.getItem("role") == "teacher" ? true : false;
  // userId: string | null = sessionStorage.getItem("userId");
  // private dialogRef: any;

  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
    this.userService.getUsers().subscribe(data => {
      this.filteredUsers = data;
    });
  }


  filterUsers(): void {
    const search = this.searchText.toLowerCase();
    // this.filteredUsers = this.users$.filter(user => 
    //   user.email.toLowerCase().includes(search)
    // );
    this.users$.subscribe(users => {
      this.filteredUsers = users.filter(user => 
        user.email.toLowerCase().includes(search)
      );
    });
  }

  openUserDialog() {

    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '330px', 
      height: 'auto',
      panelClass: 'centered-dialog', 
    });
  };

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.userService.getUsers();
    })
  }

  // showForm(): void {
  //   this.dialogRef = this.dialog.open(CourseFormComponent, {
  //     width: '330px',
  //     height: 'auto',
  //     panelClass: 'centered-dialog',
  //     data: { course: undefined }
  //   });
  // }

  // editCourse(course: Course): void {
  //   this.courseToEdit = course;
  //   this.dialogRef = this.dialog.open(CourseFormComponent, {
  //     width: '330px',
  //     height: 'auto',
  //     panelClass: 'centered-dialog',
  //     data: { course: this.courseToEdit }
  //   });
  // }



}
