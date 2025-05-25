import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-un-auth',
  standalone: true,
  imports: [],
  templateUrl: './un-auth.component.html',
  styleUrl: './un-auth.component.css'
})
export class UnAuthComponent {
  // isLoggedIn:boolean = false;
  // openComponent:boolean = false;
  constructor(private dialog: MatDialog,private router: Router, private userService: UserService) {}

  openLoginForm(): void {
    // Replace this with your actual login form opening logic
    // For example, you might navigate to a login page:
    //this.router.navigate(['/login']);
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '330px', 
      height: 'auto',
      panelClass: 'centered-dialog', 
    });
    // dialogRef.afterClosed().subscribe(() => {
    //   this.isLoggedIn = sessionStorage.getItem('token')? true : false;
    // });
    // Or you might emit an event to open a modal:
    //this.loginService.openLoginModal();
  
  }

  goToHome(): void {
    this.router.navigate(["/"])
  }
}
