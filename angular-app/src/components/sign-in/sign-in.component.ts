import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatIcon} from '@angular/material/icon'
import { DialogService } from '../../services/dialog.service';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatDialogModule, MatIcon],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  addUserForm!: FormGroup;
  hidePassword = true;
  constructor(private authService: AuthService,private fb: FormBuilder, private dialogRef: MatDialogRef<SignInComponent>,private dialogService:DialogService){}

  ngOnInit(): void {
    
    this.addUserForm = this.fb.group({   
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])]
    })
  }


    signIn(){
      if(this.addUserForm.valid){
      this.authService.signIn(this.addUserForm.value.email as string, this.addUserForm.value.password as string).subscribe(
        (response:any) => {
            sessionStorage.setItem('token', response.token);
            console.log("success", response);
            this.dialogRef.close(true);
        },
        (error)=>{
          // this.dialogRef.close(false);
          this.dialogService.handleHttpError(error);
          console.log(error);
        })
      }
    }
    
    togglePasswordVisibility(): void {
      this.hidePassword = !this.hidePassword;
    }

    cancel(): void {
      this.dialogRef.close();
    }
}
