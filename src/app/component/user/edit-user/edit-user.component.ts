import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interface/IUser';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  user!: IUser;
  constructor(
    private userService: UserService,
    private activatelRouetr: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.activatelRouetr.params.subscribe((params) => {
      const id = params['id'];
      // console.log(id);
      if (params) {
        this.userService.getUser(id).subscribe((item) => (this.user = item));
      }
    });
  }

  onUserEdit() {
    // console.log(this.user);

    this.userService.updateUser(this.user).subscribe(() => {
      alert('Update Product SuccessFully!!!');
      this.router.navigateByUrl('/admin/user');
    });
  }
}
