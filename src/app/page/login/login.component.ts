import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interface/IUser';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onlogin() {
    this.authService.getAll(this.loginForm.value).subscribe((data: any) => {
      const user = data.find((item: IUser) => {
        return (
          item.email === this.loginForm.value.email &&
          item.password === this.loginForm.value.password
        );
      });

      if (user) {
        alert('Login SuccessFully');
        // console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        user.admin
          ? this.router.navigateByUrl('/admin')
          : this.router.navigateByUrl('/');
      } else {
        alert('Login False !!');
      }
    });
  }
}
