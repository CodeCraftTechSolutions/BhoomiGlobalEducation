import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../Services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private _service:AccountService, private router:Router) {

      // Initialize the register form with validation rules
      this.registerForm = this.fb.group({
        fName: ['', [Validators.required, Validators.minLength(2)]],  // First name with min length
        lName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, this.confirmPasswordwordValidator.bind(this)]],
        phoneNumber: ['', [Validators.required, Validators.pattern('^\\+?\\d{1,4}?\\s?-?\\(?\\d{1,3}?\\)?\\s?-?\\d{1,4}\\s?-?\\d{1,4}\\s?-?\\d{1,9}$')]],
        gender: ['', Validators.required],
        age: ['', [Validators.required, Validators.min(18), Validators.max(120)]],  // Age validation
        address: ['', [Validators.required, Validators.minLength(10)]] 
      });
   }

  ngOnInit(): void {
  
  }

  confirmPasswordwordValidator(control: any): { [key: string]: boolean } | null {
    if (this.registerForm && control.value !== this.registerForm.get('password')?.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }

 
  onSubmit(): void {
    if (this.registerForm.valid) {
      this._service.register(this.registerForm.value).subscribe({next:(res)=>{
        alert("Registered Successfully.")
        this.router.navigateByUrl('/signin');
      },
    error:(err)=>[
      alert("Failed to Register. Please retry Again.")
    ]})
      // Perform login operation here
    } else {
      alert("Please Enter the valid data");
    }
  }

}
