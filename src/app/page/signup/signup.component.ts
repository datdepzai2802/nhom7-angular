import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupFrom!: FormGroup;

  constructor(
    private fromBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupFrom = this.fromBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      urlImage: 'https://picsum.photos/536/354',
      admin: false,
    });
  }
  onSignup() {
    this.authService.sigup(this.signupFrom.value).subscribe((data) => {
      alert('Login SuccessFully!!');
      this.signupFrom.reset();
      this.router.navigateByUrl('/signin');
    });
  }
}
