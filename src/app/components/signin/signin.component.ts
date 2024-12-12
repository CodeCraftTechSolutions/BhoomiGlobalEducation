import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../Services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,NgIf],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{


  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _service:AccountService, private router:Router,
              
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this._service.login(this.loginForm.value).subscribe({next:(res:any)=>{
        localStorage.setItem("name",res.username)
        alert("Logged In Successfully.");
        this.router.navigateByUrl('/');
      },
    error:(err)=>[
      alert("Failed to Login. Please Check your Credentials.")
    ]})
      // Perform login operation here
    } else {
      alert("Please Enter the data");
    }
  }

}
