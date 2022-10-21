import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interface/IUser';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  user!: IUser;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.activatedRoute.params.subscribe((params) => {
      const idParams = params['id'];

      this.userService.getUser(idParams).subscribe((user) => {
        this.user = user;
      });
    });
  }
}
