import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { MatRadioModule } from '@angular/material/radio';
import {MatIcon} from '@angular/material/icon'



@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,MatFormFieldModule,
    MatButtonModule,MatDialogModule,MatRadioModule, MatIcon],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  userRoles:string[] = ["User","Admin"];
  addUserForm!: FormGroup;
  hidePassword = true;

  constructor(private userService: UserService,private fb: FormBuilder, private dialogRef: MatDialogRef<UserFormComponent>){}

  ngOnInit(): void {
    
    this.addUserForm = this.fb.group({
      name:['',Validators.compose([Validators.required, Validators.minLength(3)])],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(10)])],
      role:['User',Validators.required],

    })
  }


  addUser(){
    if(this.addUserForm.valid){
    this.userService.addUser(this.addUserForm.value).subscribe(
        ()=>{
          this.dialogRef.close(true);
        },
        (error)=>{
          this.dialogRef.close(false);
          alert("Error: addition failed");
          console.log(error);
        }
      )

        
    }
  }
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  
  cancel(): void {
    this.dialogRef.close();
  }
}
