import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/IUser';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: IUser[] = [];

  popoverTitle = 'Xoá Người Dùng';
  popoverMessage = 'Bạn chắc muốn xóa người dùng này!!!';
  confirmClicked = false;
  cancelClicked = false;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAllUser().subscribe((data) => (this.users = data));
  }

  removeUser(id: number) {
    this.userService
      .removeUser(id)
      .subscribe(
        (data) => (this.users = this.users.filter((user) => user.id !== id))
      );
  }
}
