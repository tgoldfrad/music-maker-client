import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';
import { UserService } from '../../services/user.service';
import {MatIcon} from '@angular/material/icon'


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatDialogModule, RouterLink, MatIcon],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private dialog: MatDialog,private router: Router, private userService: UserService) {}

  isLoggedIn:boolean = false;
  openComponent:boolean = false;
  ngOnInit(): void {
    if (typeof window !== 'undefined'){
      this.isLoggedIn = sessionStorage.getItem('token')? true : false;
    }
  }

  openSignInDialog() {

    const dialogRef = this.dialog.open(SignInComponent, {
      width: '330px', 
      height: 'auto',
      panelClass: 'centered-dialog', 
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isLoggedIn = sessionStorage.getItem('token')? true : false;
      // if (result) {
      //   this.router.navigate(['/courses'])
      //   this.openComponent=true;
      // }

    });
  }

  logOut(){
    sessionStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigateByUrl('');
    this.userService.emptyUsers();
  }
}
