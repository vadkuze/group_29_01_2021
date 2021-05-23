import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
  providers: [AuthService]
})
export class SignInPageComponent implements OnInit {
  public signInForm: FormGroup;
  
  public constructor(private _authService: AuthService, private _fb: FormBuilder) { }

  public ngOnInit(): void {
    this.signInForm = this._fb.group({
      login: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    })
  }

  public toggleControlClass(controlName: string): string {
    if(this.signInForm.get(controlName).untouched) {
      return "";
    }

    return this.signInForm.get(controlName).valid ? 'is-success' : 'is-danger';
  }

  public login() {
    this._authService
      .login(this.signInForm.value)
      .subscribe(console.log)
  }
}
