import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  public signUpForm: FormGroup;

  public constructor(private _fb: FormBuilder, private _userService: UserService ) { }
  
  public ngOnInit(): void {
    this.signUpForm = this._fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      terms: ['', [Validators.requiredTrue]],
    
    })
  }

  public sendFormData(): void {
    console.log(this.signUpForm);
    if(this.signUpForm.invalid) {
      return this.signUpForm.markAllAsTouched();
    }

    this._userService
    .add(this.signUpForm.value)
    .subscribe(console.log)

  }

  public toggleControlClass(controlName: string): string {
    if(this.signUpForm.get(controlName).untouched) {
      return "";
    }

    return this.signUpForm.get(controlName).valid ? 'is-success' : 'is-danger';
  }

  reset() {
    this.signUpForm.reset();
  }
}
