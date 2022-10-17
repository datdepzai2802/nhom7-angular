import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interface/IUser';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  onUserCreate(user: IUser) {
    user.urlImage =
      'https://i.picsum.photos/id/925/536/354.jpg?hmac=LOwNDNY01Usnn_7f-5NwaVkOcFMKNLAIF8Fym7uTiAg';
    this.userService.createUser(user).subscribe(() => {
      alert('Create User SuccessFully!!!');
      this.router.navigateByUrl('/admin/user');
    });
  }
}
