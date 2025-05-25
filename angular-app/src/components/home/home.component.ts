import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserFormComponent } from '../user-form/user-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router, private dialog: MatDialog) {}
  addUser() {

    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '330px', 
      height: 'auto',
      panelClass: 'centered-dialog', 
    });
  };
  // navigateTo(route: string): void {
  //   this.router.navigate([route])
  // }
}
